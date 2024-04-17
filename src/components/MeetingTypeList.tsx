"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { Textarea } from "./ui/textarea";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import Loader from "./loader";
import { toast } from "sonner";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};
const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const { user } = useUser();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client || !user) return;
    try {
      if (!values.dateTime) {
        toast.message("Please select a date and time");
        return;
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);
      if (!call) throw new Error("Failed to create meeting");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast.message("Meeting Created");
    } catch (error) {
      console.error(error);
      toast.message("Failed to create Meeting");
    }
  };

  if (!client || !user) return <Loader />;
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
      <HomeCard
        icon={"add_meeting"}
        title={"New Meeting"}
        description={"Start an instant meeting"}
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-m_card-1"
      />
      <HomeCard
        icon={"join_meeting"}
        title={"Join Meeting"}
        description={"via invite link"}
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-m_card-4"
      />
      <HomeCard
        icon={"calendar"}
        title={"Schedule Meeting"}
        description={"Plan your meeting"}
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-m_card-2"
      />
      <HomeCard
        icon={"video"}
        title={"View Recordings"}
        description={"Meetings Recordings"}
        handleClick={() => router.push("/recordings")}
        className="bg-primary"
      />

      {/* Modals */}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        buttonIcon="add_meeting"
        handleClick={createMeeting}
      />

      <MeetingModal
        isOpen={meetingState === "isJoiningMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Join Meeting"
        className="text-center"
        buttonText="Join Meeting"
        buttonIcon="join_meeting"
      ></MeetingModal>

      <MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Schedule Meeting"
        className="text-center"
        buttonText="Schedule Meeting"
        buttonIcon="calendar"
      ></MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
