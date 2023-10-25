export const viewAdminCategories = () => {
    const a = `
    <div class="container-fluid ">
    <!-- nav top start -->
    <nav class="nav-top navbar navbar-expand-lg navbar-light bg-light  mt-2 rounded-top-4 ">
        <div class="container-fluid">
            <a class="navbar-brand  rounded-3 w15 justify-content-around " href="#">
                <img src="../Images/admin.png" alt="">
                <p class="fw-bolder m0 pl-10px" style="color: #fff;">Citizen</p>
            </a>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search ..." aria-label="Search">
                <button class="btn btn-outline-info text-white" type="submit">Search</button>
        </div>
    </nav>
    <!-- nav top end -->

    <div class="container-fluid w100 d-flex flex-row p0 ">
        <!-- nav left start -->
        <nav
            class="nav-left navbar navbar-lg navbar-light  bg-light w20 mt-2   rounded-bottom-3 d-flex flex-column justify-content-start">
            <div class="container-fluid m0 p0">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w100 ">
                    <li class="nav-item  "> <!-- active bg-main-active-->
                        <a class="nav-link btn btn-outline-info border-1" aria-current="page"
                        href="/admin/products" data-navigo>
                            <span>
                                <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
                                    xml:space="preserve" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <style type="text/css">
                                            .st0 {
                                                fill: #000000;
                                            }
                                        </style>
                                        <g>
                                            <path class="st0"
                                                d="M31.708,227.439c0.826,0.708,1.877,1.09,2.964,1.09c0.65,0,1.273-0.132,1.869-0.397l29.06-13.14l23.681,19.035 c0.798,0.647,1.808,0.997,2.844,0.997c1.036,0,2.04-0.35,2.842-0.997l23.682-19.035l29.059,13.14 c0.592,0.265,1.219,0.397,1.87,0.397c1.082,0,2.138-0.382,2.964-1.09c1.328-1.154,1.88-2.991,1.409-4.682l-26.368-93.284h1.043 v-24.239c0-4.331-1.016-8.521-3.026-12.462c-2.838-5.554-7.484-10.25-13.435-13.576c-5.951-3.333-12.879-5.101-20.04-5.101 c-9.568,0.008-18.607,3.131-25.454,8.801c-3.419,2.828-6.118,6.153-8.019,9.876c-2.013,3.934-3.03,8.123-3.03,12.462v24.223h1.044 l-26.365,93.3C29.823,224.448,30.376,226.286,31.708,227.439z M88.562,221.8l-18.35-14.744l5.472-41.802h12.878V221.8z M88.562,158.119H76.614l3.279-25.088h8.669V158.119z M95.689,221.8l0.003-56.546h12.875l5.471,41.802L95.689,221.8z M95.692,158.119v-25.088h8.666l3.283,25.088H95.692z M128.264,165.254l14.296,50.58l-21.45-9.69l-5.351-40.89H128.264z M126.251,158.119h-11.422l-3.28-25.088h7.61L126.251,158.119z M66.002,105.234c0-2.679,0.635-5.281,1.889-7.742 c1.896-3.715,5.098-6.917,9.26-9.254c4.397-2.453,9.568-3.762,14.943-3.762h0.062c7.049,0,13.899,2.337,18.802,6.411 c2.329,1.924,4.143,4.151,5.398,6.605c1.258,2.461,1.892,5.063,1.892,7.742v18.724H66.002V105.234z M65.09,133.031h7.61 l-3.279,25.088H57.999L65.09,133.031z M55.985,165.254h12.501l-5.347,40.89l-21.45,9.69L55.985,165.254z">
                                            </path>
                                            <polygon class="st0"
                                                points="138.428,358.367 113.502,363.804 27.327,449.986 62.022,484.677 148.196,398.503 153.636,373.579 216.74,310.467 201.534,295.263 ">
                                            </polygon>
                                            <rect x="-1.699" y="469.646"
                                                transform="matrix(-0.7072 -0.707 0.707 -0.7072 -286.7766 842.932)"
                                                class="st0" width="65.712" height="22.405"></rect>
                                            <path class="st0"
                                                d="M465.73,123.257l-35.291,35.291l-36.085-36.086l48.041-48.04c-0.775-0.834-1.527-1.675-2.337-2.484 c-1.336-1.34-2.726-2.625-4.14-3.872l-47.978,47.979l-36.085-36.086l34.107-34.106c-3.872-0.538-7.816-0.865-11.827-1.005 l-28.698,28.694l-20.769-20.773c-3.107,1.09-6.184,2.297-9.237,3.598l23.596,23.592l-40.1,40.096l-31.981-31.98 c-1.651,1.534-3.291,3.1-4.898,4.712c-0.538,0.53-1.056,1.091-1.59,1.636l32.055,32.051l-40.093,40.088l-24.098-24.098 c-1.277,3.116-2.406,6.262-3.407,9.424l21.092,21.092l-25.784,25.782c0.432,3.691,1.051,7.344,1.874,10.958l30.325-30.33 l36.089,36.086l-41.6,41.607c1.258,1.386,2.563,2.757,3.91,4.104c0.802,0.802,1.628,1.581,2.45,2.36l41.654-41.654l36.082,36.086 l-31.319,31.318c2.78,0.701,5.589,1.309,8.431,1.784c0.755,0.132,1.515,0.226,2.278,0.335l27.022-27.019l22.689,22.681 c3.162-0.989,6.309-2.118,9.44-3.388l-25.711-25.71l40.093-40.089l33.644,33.64c0.549-0.522,1.102-1.028,1.639-1.566 c1.616-1.621,3.17-3.256,4.709-4.915l-33.578-33.577l40.096-40.096l25.17,25.165c1.297-3.053,2.488-6.13,3.586-9.245 l-22.338-22.338l30.182-30.182C466.801,130.874,466.361,127.027,465.73,123.257z M345.437,86.37l36.089,36.092l-40.096,40.097 l-36.089-36.085L345.437,86.37z M258.834,172.98l40.093-40.096l36.085,36.093l-40.089,40.088L258.834,172.98z M337.418,251.568 l-36.081-36.092l40.093-40.089l36.081,36.085L337.418,251.568z M383.929,205.054l-36.085-36.077l40.096-40.104l36.085,36.085 L383.929,205.054z">
                                            </path>
                                            <path class="st0"
                                                d="M504.931,93.979c-6.406-20.103-17.318-38.702-32.767-54.147c-15.438-15.438-34.037-26.349-54.143-32.759 c-30.189-9.628-63.685-9.261-96.253,0.093c-32.58,9.362-64.338,27.751-91.229,54.63c-17.914,17.922-31.521,37.487-40.829,57.769 c-13.973,30.414-18.241,62.48-13.166,92.647c5.047,30.181,19.468,58.399,42.168,81.08c15.122,15.118,32.701,26.591,51.682,34.037 c28.479,11.184,60.094,13.28,91.21,5.717c31.135-7.547,61.729-24.706,88.6-51.585c35.828-35.851,56.604-80.341,60.954-123.95 C513.319,135.711,511.349,114.097,504.931,93.979z M477.277,182.319c-7.968,27.751-23.842,55.362-47.355,78.861 c-15.674,15.686-32.428,27.238-49.443,35.05c-25.532,11.706-51.628,15.032-75.944,10.95c-24.324-4.097-46.931-15.577-65.546-34.161 c-12.399-12.408-21.621-26.606-27.618-41.88c-8.98-22.922-10.756-48.328-4.545-73.984c6.224-25.633,20.485-51.554,43.991-75.084 c31.334-31.35,69.993-49.084,106.507-52.691c18.248-1.807,35.933-0.116,51.977,5.008c16.065,5.14,30.502,13.646,42.589,25.718 c12.084,12.096,20.589,26.536,25.722,42.596C485.303,126.754,485.257,154.552,477.277,182.319z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <p class="">Products</p>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link btn btn-outline-info" aria-current="page" href="/admin/categories" data-navigo>
                            <span>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M2 6.47762C2 5.1008 2 4.4124 2.22168 3.86821C2.52645 3.12007 3.12007 2.52645 3.86821 2.22168C4.4124 2 5.1008 2 6.47762 2V2C7.85443 2 8.54284 2 9.08702 2.22168C9.83517 2.52645 10.4288 3.12007 10.7336 3.86821C10.9552 4.4124 10.9552 5.1008 10.9552 6.47762V6.47762C10.9552 7.85443 10.9552 8.54284 10.7336 9.08702C10.4288 9.83517 9.83517 10.4288 9.08702 10.7336C8.54284 10.9552 7.85443 10.9552 6.47762 10.9552V10.9552C5.1008 10.9552 4.4124 10.9552 3.86821 10.7336C3.12007 10.4288 2.52645 9.83517 2.22168 9.08702C2 8.54284 2 7.85443 2 6.47762V6.47762Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M2 17.5224C2 16.1456 2 15.4572 2.22168 14.913C2.52645 14.1649 3.12007 13.5712 3.86821 13.2665C4.4124 13.0448 5.1008 13.0448 6.47762 13.0448V13.0448C7.85443 13.0448 8.54284 13.0448 9.08702 13.2665C9.83517 13.5712 10.4288 14.1649 10.7336 14.913C10.9552 15.4572 10.9552 16.1456 10.9552 17.5224V17.5224C10.9552 18.8992 10.9552 19.5876 10.7336 20.1318C10.4288 20.88 9.83517 21.4736 9.08702 21.7783C8.54284 22 7.85443 22 6.47762 22V22C5.1008 22 4.4124 22 3.86821 21.7783C3.12007 21.4736 2.52645 20.88 2.22168 20.1318C2 19.5876 2 18.8992 2 17.5224V17.5224Z"
                                            fill="#000000"></path>
                                        <path
                                            d="M13.0449 17.5224C13.0449 16.1456 13.0449 15.4572 13.2666 14.913C13.5714 14.1649 14.165 13.5712 14.9131 13.2665C15.4573 13.0448 16.1457 13.0448 17.5225 13.0448V13.0448C18.8994 13.0448 19.5878 13.0448 20.1319 13.2665C20.8801 13.5712 21.4737 14.1649 21.7785 14.913C22.0002 15.4572 22.0002 16.1456 22.0002 17.5224V17.5224C22.0002 18.8992 22.0002 19.5876 21.7785 20.1318C21.4737 20.88 20.8801 21.4736 20.1319 21.7783C19.5878 22 18.8994 22 17.5225 22V22C16.1457 22 15.4573 22 14.9131 21.7783C14.165 21.4736 13.5714 20.88 13.2666 20.1318C13.0449 19.5876 13.0449 18.8992 13.0449 17.5224V17.5224Z"
                                            fill="#000000"></path>
                                        <path clip-rule="evenodd"
                                            d="M16.7725 9.47766C16.7725 9.89187 17.1082 10.2277 17.5225 10.2277C17.9367 10.2277 18.2725 9.89187 18.2725 9.47766V7.22766H20.5225C20.9367 7.22766 21.2725 6.89187 21.2725 6.47766C21.2725 6.06345 20.9367 5.72766 20.5225 5.72766H18.2725V3.47766C18.2725 3.06345 17.9367 2.72766 17.5225 2.72766C17.1082 2.72766 16.7725 3.06345 16.7725 3.47766L16.7725 5.72766H14.5225C14.1082 5.72766 13.7725 6.06345 13.7725 6.47766C13.7725 6.89187 14.1082 7.22766 14.5225 7.22766H16.7725L16.7725 9.47766Z"
                                            fill="#000000" fill-rule="evenodd"></path>
                                    </g>
                                </svg>
                            </span>
                            <p class="">Categories</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-info" aria-current="page" href="#">
                            <span>
                                <svg viewBox="0 0 1024 1024" class="icon" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M512 505.6c-108.8 0-204.8-89.6-204.8-204.8S396.8 102.4 512 102.4c108.8 0 204.8 89.6 204.8 204.8S620.8 505.6 512 505.6z m0-358.4c-83.2 0-153.6 70.4-153.6 153.6s64 153.6 153.6 153.6 153.6-70.4 153.6-153.6S595.2 147.2 512 147.2z"
                                            fill="#000000"></path>
                                        <path
                                            d="M832 864c0-211.2-147.2-377.6-326.4-377.6s-326.4 166.4-326.4 377.6H832z"
                                            fill="#ffffff00"></path>
                                        <path
                                            d="M832 889.6H147.2v-25.6c0-224 160-403.2 352-403.2s352 179.2 352 396.8v25.6l-19.2 6.4z m-633.6-51.2h608C800 659.2 665.6 512 505.6 512c-166.4 0-294.4 147.2-307.2 326.4zM710.4 499.2c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6c64 0 121.6-51.2 121.6-121.6 0-51.2-32-96-83.2-115.2-12.8-6.4-19.2-19.2-12.8-32 6.4-12.8 19.2-19.2 32-12.8 70.4 19.2 115.2 83.2 115.2 160-6.4 96-83.2 172.8-172.8 172.8z"
                                            fill="#000000"></path>
                                        <path
                                            d="M966.4 806.4h-57.6c-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6h32c-12.8-140.8-115.2-249.6-236.8-249.6-12.8 0-25.6-12.8-25.6-25.6s12.8-25.6 25.6-25.6c160 0 288 147.2 288 326.4v25.6h-25.6z"
                                            fill="#000000"></path>
                                        <path
                                            d="M300.8 499.2c-6.4 0-6.4 0 0 0-44.8 0-89.6-12.8-121.6-44.8-32-32-44.8-76.8-44.8-121.6 0-70.4 44.8-134.4 115.2-160 12.8-6.4 25.6 0 32 12.8 6.4 12.8 0 25.6-12.8 32-57.6 19.2-89.6 64-89.6 115.2 0 32 12.8 64 32 83.2 19.2 25.6 51.2 32 83.2 38.4 19.2 0 25.6 12.8 25.6 25.6s-6.4 19.2-19.2 19.2z"
                                            fill="#000000"></path>
                                        <path
                                            d="M89.6 806.4H12.8v-25.6c0-179.2 128-320 288-320 12.8 0 25.6 12.8 25.6 25.6s-12.8 25.6-25.6 25.6C179.2 512 76.8 620.8 64 761.6h32c12.8 0 25.6 12.8 25.6 25.6-6.4 6.4-12.8 19.2-32 19.2z"
                                            fill="#000000"></path>
                                    </g>
                                </svg>
                            </span>
                            <p class="">Customer</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn btn-outline-info" aria-current="page" href="#">
                            <span>
                                <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37.383 49.85"
                                    xml:space="preserve">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path
                                                d="M0,17.307v30.678c0,1.028,0.827,1.865,1.846,1.865h15.738V15.441H1.846C0.827,15.441,0,16.278,0,17.307z">
                                            </path>
                                            <path
                                                d="M35.536,15.441H19.798v34.408h15.738c1.019,0,1.847-0.837,1.847-1.864V17.307C37.383,16.278,36.555,15.441,35.536,15.441z">
                                            </path>
                                            <path
                                                d="M6.663,6.128c0.303,0.529,0.801,1.397,1.103,1.927L8.57,9.47c0.308,0.531,0.802,0.531,1.104,0l0.81-1.415 c0.303-0.529,0.801-1.397,1.103-1.927l0.805-1.415c0.308-0.531,0.058-0.962-0.551-0.962h-1.009V0.237 C10.832,0.108,10.725,0,10.599,0H7.651c-0.13,0-0.232,0.107-0.232,0.236v3.515H6.406c-0.606,0-0.856,0.431-0.553,0.962L6.663,6.128 z">
                                            </path>
                                            <path
                                                d="M25.541,6.119h1.012v3.514c0,0.129,0.105,0.233,0.23,0.233h2.947c0.129,0,0.233-0.104,0.233-0.233V6.119h1.013 c0.604,0,0.855-0.436,0.553-0.967l-0.809-1.41c-0.303-0.529-0.802-1.401-1.104-1.933L28.811,0.4c-0.307-0.53-0.801-0.53-1.103,0 l-0.81,1.41c-0.303,0.531-0.801,1.403-1.104,1.933l-0.805,1.41C24.684,5.684,24.932,6.119,25.541,6.119z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                            <p>Transports</p>
                        </a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link btn btn-outline-info dropdown-toggle" aria-current="page" href="#"
                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>
                                <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                    </g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M20,3H4A3,3,0,0,0,1,6V18a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V6A3,3,0,0,0,20,3Zm1,15a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1ZM9,12v4a1,1,0,0,1-2,0V12a1,1,0,0,1,2,0Zm4-2v6a1,1,0,0,1-2,0V10a1,1,0,0,1,2,0Zm4-2v8a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0Z">
                                        </path>
                                    </g>
                                </svg>
                            </span>
                            <p>Statisticals</p>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">News User</a></li>
                            <li><a class="dropdown-item" href="#">Rentals</a></li>
                            <li><a class="dropdown-item" href="#">Votes</a></li>

                        </ul>
                    </li>

                </ul>
            </div>
        </nav>
        <!-- nav left end -->

        <!-- container-show start -->
        <div class="container-fluid mt-2 p0 pl-10px h-auto">
            <div class="container-show h100 ">
                <div class="d-flex flex-column h100">
                    <button type="button" class="btn btn-success mb-1" data-toggle="collapse"
                        href="#multiCollapseExample1" role="button" aria-expanded="false"
                        aria-controls="multiCollapseExample1">
                        Add news
                        <span>
                            <svg class="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 5.257v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                    </button>
                    <div class="container-fluid">
                        <table class="table  table-hover" id="listCate">
                            <thead>
                                <tr class="pl-10px text-center">
                                    <th class="col-1">ID</th>
                                    <th class="col-3">Name Category</th>
                                    <!-- <th class="col-2 ">Image</th> -->
                                    <!-- <th class="col-2">Category</th> -->
                                    <!-- <th class="col-1">Price</th> -->
                                    <th class="col-5">Descriton</th>
                                    <th class="col-3 text-center">Actions</th>

                                </tr>
                                <!-- <tr class="pl-10px rouned-3">
                                    <th class="col-1">ID</th>
                                    <th class="col-3">Name</th>
                                    <th class="col-2 ">Price</th>
                                    <th class="col-3">Description</th>
                                    <th class="col-3 text-center">Actions</th>
                                </tr> -->
                            </thead>
                            <tbody id="categoryLists">
                                <!-- <img src="../Images/prd-shoes03.png" alt=""> -->
                                <!-- <tr class="pl-10px text-center ">
                                    <td class="col-1">1</td>
                                    <td class="col-1">Yonex Z100</td>
                                    <td class="col-2   p0 ">
                                        <img class="  rounded-3   bcdm object-fit-contain " style=" "
                                            src="../Images/prd-racket01.png" alt="">
                                    </td>
                                    <td class="col-2 h100 w100  m0  ">Racquet</td>

                                    <td class="col-1">120$</td>
                                    <td class="col-2 text-center">100% viet nam</td>
                                    <td class="col-12 d-flex justify-content-around w100 h100 align-item-center ">
                                        <button type="button" class="btn btn-outline-info w40 btn-update" data-toggle="collapse"
                                            data-target="#multiCollapseExample2" aria-expanded="false"
                                            aria-controls="multiCollapseExample2">Sửa</button>
                                        <button type="button" class="btn btn-outline-danger w40 btn-remove">Xóa</button>

                                    </td>

                                </tr> -->
                                <!-- <tr>
                                <td>1</td>
                                <td>John</td>
                                <td  class="d-flex justify-content-around h-55px" style="height: 60px !important; margin-bottom: -1px ;">
                                    <button type="button" class="btn btn-outline-info w25">Sửa</button>
                                    <button type="button" class="btn btn-outline-danger w25">Xóa</button>
                                </td>
                                
                              </tr> -->

                            </tbody>
                        </table>
                    </div>
                    <div class="container-fluid h100">
                        <div class="container">
                            <p>
                                <!-- <a class="btn btn-primary " data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Add news product</a> -->
                                <!-- <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
                                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> -->
                            </p>
                            <div class="row">
                                <div class="col">
                                    <div class="collapse multi-collapse" id="multiCollapseExample1"> <!--  -->
                                        <div class="card card-body">
                                            <form id="addNewForm">
                                                <h2 class="text-">Add category product</h2>
                                                <div class="">
                                                    <label for="exampleInputPassword1" class="form-label">Category
                                                        Name</label>
                                                    <input type="text" class="form-control" id="nameCate" value="">
                                                </div>
                                                <div class="mb-1">
                                                    <label for="exampleInputPassword1"
                                                        class="form-label">Description</label>
                                                    <input type="text" class="form-control" id="desCate">
                                                </div>
                                                <!-- <button type="submit" class="btn rounded-3 btn-outline-info w50" id="btnSubmit" aria-current="page">Add
                                                    new product</button> -->
                                                <div class=" d-flex">
                                                    <button type="submit" id="btnSubmit"
                                                        class="rounded-3 ml-1 btn-outline-info w50"
                                                        aria-current="page">Add category</button>
                                                    <button type="button"
                                                        class="rounded-3 ml-1 btn-outline-danger w50"
                                                        data-toggle="collapse" data-target="#multiCollapseExample1"
                                                        aria-expanded="false"
                                                        aria-controls="multiCollapseExample2">Close</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                                        <div class="card card-body">
                                            <form id="updateForm">
                                                <h2 class="text-">Update category</h2>
                                                <div class="">
                                                    <label for="exampleInputPassword1" class="form-label">Category
                                                        Name</label>
                                                    <input type="text" class="form-control" id="updateNameCate">
                                                </div>
                                                <div class="mb-1">
                                                    <label for="exampleInputPassword1"
                                                        class="form-label">Description</label>
                                                    <input type="text" class="form-control" id="updateDesCate">
                                                </div>
                                                <!-- <button type="submit" class="btn btn-success w50"
                                                    id="updateBtnSubmit">Update</button> -->
                                                <div class=" d-flex">
                                                    <button type="submit" id="updateBtnSubmit"
                                                        class="rounded-3 ml-1 btn-outline-info w50"
                                                        aria-current="page">Update</button>
                                                    <button type="button"
                                                        class="rounded-3 ml-1 btn-outline-danger w50"
                                                        data-toggle="collapse" href="#multiCollapseExample2"
                                                        role="button" aria-expanded="false"
                                                        aria-controls="multiCollapseExample1">Close</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- container-show end -->
    </div>
    <script type="module" src="./src/modules/adminCategories.js"></script>
</div>
    `;
    return a;
};
  