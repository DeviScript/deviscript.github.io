import dynamic from "next/dynamic";

const InterviewQuestionsClient = dynamic(() => import("./InterviewQuestionsClient"), {
  ssr: false,
});

export default function InterviewQuestionsPage() {
  return <InterviewQuestionsClient />;
}
