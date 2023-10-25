export const shoShop = () => {
    const headerShop = `
    <nav class="mb-2vh ">
    <ul class="">
        <li> <a href="index.html">Home</a> </li>
        <li> <a href="">News
                <ul>
                    <li><a href="#"> <i style="display: none;" class="fa-solid fa-arrow-right"></i>
                            BWF</a></li>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>
                            vIET nAM</a></li>
                </ul>
            </a>
        </li>
        <li> <a href="#"> Categogy
                <!-- <ul>
                    <li><a href="#"> <i style="display: none;" class="fa-solid fa-arrow-right"></i>
                            Racket</a></li>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>
                            Fashion</a></li>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>
                            accessory</a></li>
                </ul> -->
            </a>
    
        </li>
        <!-- <li> <a href="">Court</a> </li> -->
        <!-- <li> <a href="">Policy
                <ul>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>Terms</a></li>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>Privacy</a></li>
                    <li><a href="#"><i style="display: none;" class="fa-solid fa-arrow-right"></i>Warranty</a></li>
    
                </ul>
            </a>
        </li> -->
    </ul>
    <h2 class="  "><a href="index.html">WEBMINTON</a> </h2>
    <div class="row r-jt-bt   ">
        <div class="w70 row r-jt-bt r-al-ct " style="padding-right: 0;">
            <input style="margin-right: 0;" class="  lh-3vh br-10px w80  px-2" type="text" placeholder="Search..." id="searchInput">
            <div id="searchResults">
                <!-- <a href="">kk</a> <br>  <a href="">ggg</a>   -->
            </div>
            <button id="searchButton">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em"
                        viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </span>
            </button>
        </div>
        <!-- <div class=""> 
            <a href="product-detail.html">
                <i class="fa-solid fa-magnifying-glass gray "></i>
            </a>
        </div> -->
        <div class=" iconCart">
            <a href="#" >
                <div class="totalQuantity">0</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em"
                        viewBox="0 0 576 512">
                        <path
                            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                
            </a>
        </div>
        <div class="">
            <a href="login.html">
               
                    <svg xmlns="http://www.w3.org/2000/svg" height="2em"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
               
            </a>
        </div>
    
    </div>
    
    </nav>
    <div style="margin-top: 10vh;"></div>
    `;
    return headerShop;
}