"use client";

import { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { Textarea } from "./ui/textarea";

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const createMeeting = () => {};
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
        icon={"add_meeting"}
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
      <MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Create Meeting"
        handleClick={createMeeting}
      >
        <div className="flex flex-col gap-2.5">
          <label className="text-base font-normal leading-[22.4px] text-sky-2">
            Add a description
          </label>
          {/* <Textarea
            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
           
          /> */}
        </div>
      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
