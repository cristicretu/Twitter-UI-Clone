function App() {
  return (
    <div className="bg-black min-h-screen">
      
      <div className="flex">

        {/* left section, that is sticky */}
        <div className="ml-28 pt-2 mr-7">
          
          {/* twitter logo */}
          <div className="w-12 h-12 flex items-center rounded-full hover:bg-white hover:rounded  hover:bg-opacity-10">
          <svg class=" ml-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </div>

          <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
              <p1 className="ml-2">Explore</p1>
          </a>

          <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <p1 className="ml-2">Notifications</p1>
            </a>
            <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <p1 className="ml-2">Messages</p1>
            </a>
            <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
              <p1 className="ml-2">Bookmarks</p1>
            </a>
            <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              <p1 className="ml-2">Lists</p1>
            </a>
            <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <p1 className="ml-2 ">Profile</p1>
            </a>
            <a href="#" class="mt-4 text-xl group flex text-white items-center px-2 py-2  leading-6 font-bold rounded-full hover:bg-blue-800 hover:text-blue-300">
              <svg class="mr-4 h-6 w-6" fill="text-white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <p1 className="ml-2">More</p1>
            </a>
                
            <button class="bg-blue-400 w-48 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                Tweet
              </button>

        </div>
        
        {/* middle section with scroll */}
        <div className="bg-green-500 h-screen w-5/12 border-gray-300  border ml-8"></div>
        
        {/* right section, that is sticky */}
        <div className=" h-screen sticky ml-8 w-1/4">

          {/* search */}
          <div className="pl-2  bg-gray-700 flex flex-row rounded-3xl w-auto h-11 items-center mt-1">
            <svg class="ml-4 fill-current text-white text-opacity-50" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
            <input type="search" name="search" placeholder="Search Twitter" className="text-white text-opacity-50 bg-transparent ml-6"/>
          </div>

          {/* New to twitter? */}
          <div className="text-white border border-white border-opacity-30 rounded-xl mt-4 pt-2 pl-4 pb-4 pr-4">
            <h1 className="font-bold text-xl">New to Twitter?</h1>
            <p className="mt-2 text-opacity-50 text-white text-xs">Sign up now to get your own personalized timeline!</p>
            <button class="bg-blue-400 w-full mt-4 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  Sign up
            </button>
          </div>

          {/* photos */}
          <div className="border border-white border-opacity-30 rounded-xl grid mt-4 grid-flow-col grid-cols-3 grid-rows-2">
            <img src="https://pbs.twimg.com/media/EyF2oLkXIAElA80?format=jpg&name=240x240" className="w-32 h-32 rounded-l-xl" alt="picture"></img>
            <img src="https://pbs.twimg.com/media/EyBcxRXWgAIijb1?format=jpg&name=360x360" className="w-32 h-32 rounded-l-xl" alt="picture"></img>
            <img src="https://pbs.twimg.com/media/Exj-huGXMAQ_dkJ?format=jpg&name=240x240" className="w-32 h-32" alt="picture"></img>
            <img src="https://pbs.twimg.com/media/ExdMlxuWYAEpSm1?format=jpg&name=small" className="w-32 h-32" alt="picture"></img>
            <img src="https://pbs.twimg.com/media/ExTzoUSU8AEnsD2?format=jpg&name=360x360" className="w-32 h-32 rounded-r-xl" alt="picture"></img>
            <img src="https://pbs.twimg.com/media/ExIGSZ3UUAQ22gV?format=jpg&name=360x360" className="w-32 h-32 rounded-r-xl" alt="picture"></img>
          </div>

        {/* YOu might like */}
        <div className="bg-pink-900 mt-4 rounded-xl">
          <h1 className="text-white font-bold text-2xl">You might like</h1>
          <div className="grid grid-flow-row grid-rows-3">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

          {/* TOS */}
        <div class="flow-root m-6 ">
                <div class="flex-1">
                    <a href="#">
                    {/* <p class="text-sm leading-6 font-medium text-gray-500">Terms of Service Privacy Policy Cookie Policy Imprint Ads info</p> */}
                  	<div class="flex flex-wrap">
                    <ul class="text-xs leading-6 mr-2 font-medium text-gray-500">Terms of Service</ul>
                  	<ul class="text-xs leading-6 ml-2 mr-2 font-medium text-gray-500">Privacy Policy</ul>
                  	<ul class="text-xs leading-6 ml-2 mr-2 font-medium text-gray-500">Cookie Policy</ul>
                  	<ul class="text-xs leading-6 mr-2 font-medium text-gray-500">Ads info</ul>
                  	<ul class="text-xs leading-6 ml-2 mr-2 font-medium text-gray-500">More ...</ul>
                  	<ul class="text-xs leading-6 ml-2 mr-2 font-medium text-gray-500">© 2021 Twitter, Inc.</ul>
                    </div>
                    
                    </a>
           		 </div>
        </div>

        </div>

        


      </div>
    </div>
  );
}

export default App;
