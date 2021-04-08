function App() {
  return (
    <div className="bg-black w-full h-full">
      
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
        <div className=" w-5/12 border-gray-400 border-opacity-50 border ml-8">
          
          {/* name sticky */}
          <div className="border-b pl-4 pt-1 pb-1 border-gray-400 border-opacity-30 flex flex-row items-center">
          <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12l9-8v6h15v4h-15v6z"/></svg> 
            <div className="ml-6 flex flex-col space-y-0">
                    
                    <div className="flex flex-row space-x-1 items-center">
                      <h1 className="text-white text-xl font-bold">Elon Musk</h1>
                      <a title="Twitter, Public domain, via Wikimedia Commons" class="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="24" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                    </div>

                    <p className="text-gray-400 text-opacity-50">13.9K Tweets</p>
            </div>
          </div>


          {/* BIG DIV -> profile */}

          <div>
            {/* pictures */}

            <div>
              <img src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500" alt="cover"></img>
              <img className="absolute rounded-full top-48 border-4 ml-4 border-black w-36 h-36" src="https://pbs.twimg.com/profile_images/1364491704817098753/V22-Luf7_400x400.jpg" alt="pp"></img>

              <div className="flex justify-between pl-2">
              <img className=" rounded-full top-48 border-4 ml-4 border-black w-10 h-10" src="https://pbs.twimg.com/profile_images/1364491704817098753/V22-Luf7_400x400.jpg" alt="pp"></img>

              <button class="mr-4 bg-transparent text-blue-600 font-semibold hover:bg-blue-600  hover:bg-opacity-5 py-1 px-4 border border-blue-600  rounded-full">
                                    Follow
              </button> 
              
              </div>

              <div className="mt-9 ml-4 flex flex-row space-x-1 items-center">
                      <h1 className="text-white text-xl font-bold">Elon Musk</h1>
                      <a title="Twitter, Public domain, via Wikimedia Commons" class="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="24" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                    </div>

              <p className="ml-4 text-gray-400 text-opacity-50">@elonmusk</p>
              <p className="ml-4 mt-2 text-white"> Technoking of Tesla</p>
              <div className="ml-4 mt-2 flex flex-row text-gray-400 text-opacity-50 items-center">
                <svg class="fill-current text-gray-400 text-opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                <p className="ml-2">Joined June 2009</p>
              </div>

              <div className="mt-2 flex flex-row items-center">
                <div className="ml-4 flex flex-row items-center">
                  <p className="text-white font-bold">104</p>
                  <p className="ml-2 text-gray-400 text-opacity-50">Following</p>
                </div>

                <div className="ml-3 flex flex-row items-center">
                  <p className="text-white font-bold">50.4M</p>
                  <p className="ml-2 text-gray-400 text-opacity-50">Followers</p>
                </div>

              </div>

              <div className="flex flex-row pl-6 pr-6 mt-6 justify-between border-b border-gray-400 border-opacity-50 pb-4">
                <div className="">
                  <p className="text-blue-600 font-semibold">Tweets</p>
                </div>

                <div className="">
                  <p className="text-gray-400 text-opacity-50 font-semibold">Tweets & replies</p>
                </div>

                <div className="">
                  <p className="text-gray-400 text-opacity-50 font-semibold">Media</p>
                </div>

                <div className="">
                  <p className="text-gray-400 text-opacity-50 font-semibold">Likes</p>
                </div>
              </div>


            </div>


          </div>

          <div className="border-b border-gray-400 border-opacity-50 flex flex-row p-3">
            <img className="rounded-full top-48 ml-1 w-12 h-12" src="https://pbs.twimg.com/profile_images/1364491704817098753/V22-Luf7_400x400.jpg" alt="pp"></img> 
            
            <div className="ml-2">
              <div className="flex flex-row items-center justify-between">

                <div className="flex flex-row items-center space-x-2">
                
                  <div className="flex flex-row items-center space-x-2">
                
                    <h1 className="text-white  font-bold">Elon Musk</h1>
                    <a title="Twitter, Public domain, via Wikimedia Commons" class="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="16" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                  </div>
                
                  <p className="text-gray-400 text-opacity-50">@elonmusk</p>
                  <p className="text-gray-400 text-opacity-50">14h</p>
                </div>
                <p className=" pl-64 text-gray-400 text-opacity-50">...</p>
              </div>
              <p className="text-gray-200 text-base">To be clear, I do support vaccines in general & covid vaccines specifically. The science is unequivocal. <br/> <br/>

                  In very rare cases, there is an allergic reaction, but this is easily addressed with an EpiPen.</p>

              <div className="flex flex-row space-x-16 items-center mt-4">
                <div className="flex flex-row items-center space-x-4">
                  <svg class="fill-current text-gray-400 text-opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></svg>
                  <p className="text-sm text-gray-400 text-opacity-50">9.4K</p>
                </div>

                <div className="flex flex-row items-center space-x-4">
                <svg class="fill-current text-gray-400 text-opacity-50" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M5 10v7h10.797l1.594 2h-14.391v-9h-3l4-5 4 5h-3zm14 4v-7h-10.797l-1.594-2h14.391v9h3l-4 5-4-5h3z"/></svg>                  <p className="text-sm text-gray-400 text-opacity-50">9.4K</p>
                </div>

                <div className="flex flex-row items-center space-x-4">
                <svg class="fill-current text-gray-400 text-opacity-50" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"/></svg>                  <p className="text-sm text-gray-400 text-opacity-50">9.4K</p>
                </div>
              </div>
            </div>
          </div>


        </div>
        




        {/* right section, that is sticky */}
        <div className=" h-screen sticky ml-8 w-1/4">

          {/* search */}
          <div className="pl-2  bg-pink-900 py-4 px-4 flex flex-row rounded-3xl w-auto h-11 items-center mt-1">
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
        <div className=" bg-pink-900 mt-4 rounded-xl">
          <h1 className="pt-3 pl-3 pr-3 pb-2  text-white font-bold text-2xl">You might like</h1>
          <div className="grid grid-flow-row grid-rows-3">

            {/* fist recomandation */}
            <div className="p-4 flex justify-between border-t border-b border-gray-400 border-opacity-30">

              {/* profile */}
              <div className="flex flex-row">
                {/* picture */}
                <div>
                  <img className="rounded-full w-12 h-12" src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg" alt="spacex"></img>
                </div>

                {/* name */}
                <div className="ml-3 flex flex-col">
                  
                  <div className="flex flex-row space-x-2 items-center">
                    <h1 className="text-white">SpaceX</h1>
                    <a title="Twitter, Public domain, via Wikimedia Commons" className="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="18" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                  </div>

                  <p className="text-gray-400 text-opacity-50">@SpaceX</p>
                </div>

              </div>

              {/* follow */}
              <div className="float-right">
              <button class="bg-transparent text-blue-600 font-semibold hover:bg-blue-600  hover:bg-opacity-5 py-1 px-5 border border-blue-600  rounded-full">
                                    Follow
              </button> 
              </div>

            </div>
            
            {/* second recomandation */}
            <div className="p-4 flex justify-between border-t border-b border-gray-400 border-opacity-30">

              {/* profile */}
              <div className="flex flex-row">
                {/* picture */}
                <div>
                  <img className="rounded-full w-12 h-12" src="https://pbs.twimg.com/profile_images/1337607516008501250/6Ggc4S5n_400x400.png" alt="spacex"></img>
                </div>

                {/* name */}
                <div className="ml-3 flex flex-col">
                  
                  <div className="flex flex-row space-x-2 items-center">
                    <h1 className="text-white">Tesla</h1>
                    <a title="Twitter, Public domain, via Wikimedia Commons" className="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="18" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                  </div>

                  <p className="text-gray-400 text-opacity-50">@Tesla</p>
                </div>

              </div>

              {/* follow */}
              <div className="float-right">
              <button class="bg-transparent text-blue-600 font-semibold hover:bg-blue-600  hover:bg-opacity-5 py-1 px-5 border border-blue-600  rounded-full">
                                    Follow
              </button> 
              </div>

            </div>
            
            {/* third recomandation */}
            <div className="p-4 flex justify-between border-t border-b border-gray-400 border-opacity-30">

              {/* profile */}
              <div className="flex flex-row">
                {/* picture */}
                <div>
                  <img className="rounded-full w-12 h-12" src="https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg" alt="spacex"></img>
                </div>

                {/* name */}
                <div className="ml-3 flex flex-col">
                  
                  <div className="flex flex-row space-x-2 items-center">
                    <h1 className="text-white">NASA</h1>
                    <a title="Twitter, Public domain, via Wikimedia Commons" className="fill-current text-white" href="https://commons.wikimedia.org/wiki/File:Twitter_Verified_Badge.svg"><img width="18" className="fill-current text-white" alt="Twitter Verified Badge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png"/></a>
                  </div>

                  <p className="text-gray-400 text-opacity-50">@NASA</p>
                </div>

              </div>

              {/* follow */}
              <div className="float-right">
              <button class="bg-transparent text-blue-600 font-semibold hover:bg-blue-600  hover:bg-opacity-5 py-1 px-5 border border-blue-600  rounded-full">
                                    Follow
              </button> 
              </div>

            </div>

        
           
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
