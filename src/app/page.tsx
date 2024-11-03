import ApiApp from "@/components/api-app";
import ApiPages from "@/components/api-pages";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 compare-box">
        <div className='flex flex-col justify-start items-center compare-item'>
          <div className="post-title text-sm my-2">app: api/auth/<span className="mark">app-login</span></div>
          <ApiApp />
        </div>
        <div className='flex flex-col justify-start items-center compare-item'>
          <div className="post-title text-sm my-2">pages: api/auth/<span className="mark">pages-login</span></div>
          <ApiPages />
        </div>
      </div>
    </div>
  );
}
