function backEnd({ switcher }) {
    return (
        <div className="p-5 sm:p-10 flex flex-col md:flex-row justify-center md:items-center text-text-color">
            <div className="md:basis-1/2">
                <div className="text-2xl px-5 sm:px-16">backend Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini</div>
                <div className="px-10 md:px-20 my-5 flex md:block justify-center">
                    <button onClick={switcher} class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            look at frontend
                        </span>
                    </button>
                </div>
            </div>
            <div className="md:basis-1/2">
                <div class="flex flex-row gap-10 flex-wrap justify-center">
                    <div class="basis-1/3 lg:basis-1/4">
                        <div>XXX</div>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                        </div>
                    </div>
                    <div class="basis-1/3 lg:basis-1/4">
                        <div>XXX</div>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                        </div>
                    </div>
                    <div class="basis-1/3 lg:basis-1/4">
                        <div>XXX</div>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                        </div>
                    </div>
                    <div class="basis-1/3 lg:basis-1/4">
                        <div>XXX</div>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                        </div>
                    </div>
                    <div class="basis-1/3 lg:basis-1/4">
                        <div>XXX</div>
                        <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "45%" }}> 45%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default backEnd;