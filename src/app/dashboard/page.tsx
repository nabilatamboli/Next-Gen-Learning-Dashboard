import Sidebar from "../../components/Sidebar";
import HeroTile from "../../components/HeroTile";
import CourseCard from "../../components/CourseCard";
import ActivityTile from "../../components/ActivityTile";
import PageWrapper from "../../components/PageWrapper";
import { supabase } from "../../lib/supabase";

export default async function DashboardPage() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    throw new Error(error.message);
  }

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <PageWrapper>
      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <HeroTile />
          </div>

          <ActivityTile />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              iconName={course.icon_name}
            />
          ))}
        </div>
      </main>
      </PageWrapper>
    </div>
  );
}