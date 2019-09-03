(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/amenities/amenities.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/amenities/amenities.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"amenity-main\">\n  <div class=\"main\">\n    <section id=\"header\">\n      <h1>Amenities</h1>\n      <p>Welcome to Nauvoo House. The original Nauvoo House was built in Nauvoo, IL as a place of respite for Pioneers.\n        Likewise, Nauvoo House is a place where you can work hard on your studies as well as relax and enjoy an amazing\n        social environment where you will meet great people!</p>\n    </section>\n\n    <div id=\"pic-tiles\">\n      <h2>Complex Amenities</h2>\n\n      <section id=\"mid-section\">\n        <div class=\"tiles\">\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/theater2-du.jpg\">\n            <p class=\"text-position\">2 Theater Rooms</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/games.jpg\">\n            <p class=\"text-position\">Clubhouse Game Room</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/picnic1.jpg\">\n            <p class=\"text-position\">Picnic & BBQ Area</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/studyroom1.jpg\">\n            <p class=\"text-position\">Study Rooms</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/images/old-piano.jpg\">\n            <p class=\"text-position\">Piano Room</p>\n          </div>\n        </div>\n\n        <div class=\"tiles\">\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/gym-girls2.jpg\">\n            <p class=\"text-position\">Girls & Boys Gyms</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/firepit1.jpg\">\n            <p class=\"text-position\">Fire Pit</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/club.jpg\">\n            <p class=\"text-position\" id=\"clubhouse\">Spacious Clubhouse & Community Kitchens</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/os-front1.jpg\">\n            <p class=\"text-position\">Free Tenant Storage</p>\n          </div>\n\n          <div class=\"container\">\n            <img src=\"../../assets/new-images/parking-lot.jpg\">\n            <p class=\"text-position\">Parking</p>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <section id=\"apt-amenity\">\n      <h2>Apartment Amenities</h2>\n      <p class=\"heading\">Each apartment includes:</p>\n      <div class=\"row\">\n        <div class=\"column\">\n          <p class=\"list-head\">Kitchen:</p>\n          <ul>\n            <li>Dishwasher</li>\n            <li>Mircowave</li>\n            <li>Fridge</li>\n            <li>Oven/stove</li>\n            <li>Tons of Cabinets</li>\n            <li>Pantry Cabinet</li>\n            <li>Island with Stools and Extra Storage</li>\n          </ul>\n        </div>\n\n        <div class=\"column\">\n          <p class=\"list-head\">Furniture:</p>\n          <ul>\n            <li>Washer/Dryer</li>\n            <li>Flat Screen HD TV</li>\n            <li>Couch and Love Seat</li>\n            <li>Bed Frame & Mattress (standard twin)</li>\n            <li>Dresser</li>\n            <li>Chair</li>\n            <li>Vacuum</li>\n          </ul>\n        </div>\n\n        <div class=\"column\">\n          <p class=\"list-head\">Misc:</p>\n          <ul>\n            <li>HD Dish Network with DVR & Sports Channels</li>\n            <li>High Speed Wifi</li>\n            <li>Self Locking, Key Code Front Doors</li>\n            <li>Ethernet Port in Most Apartments</li>\n            <li>Central Heating</li>\n            <li>Air Conditioning Available (Girls: June 1 - August 30)</li>\n            <li>Huge Storage Closet</li>\n          </ul>\n        </div>\n      </div>\n\n      <p id=\"uti\" class=\"heading\">All utilities included in rent</p>\n      <p id=\"list\" class=\"heading\">(Water, Sewer, Electrcity, Gas, Internet, Cable, Everything)</p>\n    </section>\n\n    <div id=\"button\">\n      <button (click)=\"topFunction()\" id=\"myBtn\">To Top</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<title>Nauvoo House</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link href=\"//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold\" rel=\"stylesheet\" type=\"text/css\"/>\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body>\n<app-header></app-header>\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n<!-- <app-home></app-home> -->\n<!-- <app-apt></app-apt> -->\n<!-- <app-amenities></app-amenities> -->\n<!-- <app-gallery></app-gallery> -->\n<!-- <app-contact></app-contact> -->\n<!-- <app-residents></app-residents> -->\n<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBHb_280k8p4DIqmkygUXqj6w2c7E-RTgA&callback=initMap\"\ntype=\"text/javascript\"></script>\n<app-footer></app-footer>\n</body>\n</html>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apt/apt.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apt/apt.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"apt-main\">\n  <div class=\"apt\">\n    <div id=\"header-pic\"></div>\n    <section id=\"header\">\n      <h1>Apartments & Pricing</h1>\n      <p id=\"block-text\">{{ blockText | uppercase}}</p>\n    </section>\n\n    <div class=\"apt-white\">\n      <section id=\"view-apt\">\n        <h2>View Our Apartments</h2>\n        <p>Want to see your home away from home before you move in?<br>\n          Stop by for a tour. Walk ins welcome.<br>\n          Tours: M-F 1-5pm in the office in the upstairs clubhouse</p>\n\n        <div class=\"row\">\n          <div class=\"column\" id=\"floorplan\"></div>\n\n          <div class=\"column\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <section id=\"mens\">\n      <h2>Nauvoo House I - Men's Shared</h2>\n\n      <div class=\"row\">\n        <div class=\"column\" id=\"nh1\">\n          <img src=\"../../assets/new-images/nh1.jpg\">\n          <a routerLink=\"/sign\" class=\"point-link\">\n            <div class=\"pointer\">Sign Up Now</div>\n          </a>\n        </div>\n\n        <div class=\"column\" id=\"nh1-info\">\n\n          <div class=\"row info\">\n            <div class=\"column\">\n              <p>Details:</p>\n              <ul>\n                <li>3 Bedrooms</li>\n                <li>2 Bathrooms</li>\n                <li>6 Beds</li>\n                <li>1,400 Square Feet</li>\n              </ul>\n            </div>\n            <div class=\"column info\">\n              <p>Availability:</p>\n              <ul class=\"avail-list\">\n                <li>Fall 2019:<p class=\"avail\">Available</p>\n                </li>\n                <li>Winter 2020:<p class=\"avail\">Available</p>\n                </li>\n                <li>Spring 2020:<p class=\"avail\">Available</p>\n                </li>\n              </ul>\n            </div>\n          </div>\n\n          <table>\n            <tr>\n              <th>Semester</th>\n              <th>Fall 2019\n                <p class=\"small\">9/13/19 - 12/20/19</p>\n              </th>\n              <th>Winter 2020\n                <p class=\"small\">1/6/20 - 4/11/20</p>\n              </th>\n              <th>Spring 2020\n                <p class=\"small\">4/19/20 - 7/24/20</p>\n              </th>\n            </tr>\n            <tr>\n              <th>Best Deal:</th>\n              <td>$1,339\n                <p class=\"small\">Sign by 5/31/19</p>\n              </td>\n              <td>$1,339\n                <p class=\"small\">Sign by 9/20/19</p>\n              </td>\n              <td>$1,309\n                <p class=\"small\">Sign by 1/17/20</p>\n              </td>\n            </tr>\n            <tr>\n              <th>Early Bird:</th>\n              <td>$1,369\n                <p class=\"small\">Sign by 7/24/19</p>\n              </td>\n              <td>$1,369\n                <p class=\"small\">Sign by 11/1/19</p>\n              </td>\n              <td>$1,339\n                <p class=\"small\">Sign by 2/21/20</p>\n              </td>\n            </tr>\n            <tr>\n              <th>Value Price:</th>\n              <td>$1,399</td>\n              <td>$1,399</td>\n              <td>$1,369</td>\n            </tr>\n          </table>\n        </div>\n      </div>\n    </section>\n\n    <div class=\"apt-white\">\n      <section id=\"womens\">\n        <h2>Nauvoo House II - Women's Shared</h2>\n\n        <div class=\"row\">\n          <div class=\"column\" id=\"nh2\">\n            <img src=\"../../assets/new-images/nh2.jpg\">\n            <a routerLink=\"/sign\" class=\"point-link\">\n              <div class=\"pointer\">Sign Up Now</div>\n            </a>\n          </div>\n\n          <div class=\"column\" id=\"nh2-info\">\n\n            <div class=\"row info\">\n              <div class=\"column\">\n                <p>Details:</p>\n                <ul>\n                  <li>3 Bedrooms</li>\n                  <li>2 Bathrooms</li>\n                  <li>6 Beds</li>\n                  <li>1,400 Square Feet</li>\n                </ul>\n              </div>\n              <div class=\"column info\">\n                <p>Availability:</p>\n                <ul class=\"avail-list\">\n                  <li>Fall 2019:<p class=\"full\">Full</p>\n                  </li>\n                  <li>Winter 2020:<p class=\"avail\">Available</p>\n                  </li>\n                  <li>Spring 2020:<p class=\"avail\">Available</p>\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n            <table>\n              <tr>\n                <th>Semester</th>\n                <th>Fall 2019\n                  <p class=\"small\">9/13/19 - 12/20/19</p>\n                </th>\n                <th>Winter 2020\n                  <p class=\"small\">1/6/20 - 4/11/20</p>\n                </th>\n                <th>Spring 2020\n                  <p class=\"small\">4/19/20 - 7/24/20</p>\n                </th>\n              </tr>\n              <tr>\n                <th>Best Deal:</th>\n                <td>$1,339\n                  <p class=\"small\">Sign by 5/31/19</p>\n                </td>\n                <td>$1,339\n                  <p class=\"small\">Sign by 9/20/19</p>\n                </td>\n                <td>$1,339\n                  <p class=\"small\">Sign by 1/17/20</p>\n                </td>\n              </tr>\n              <tr>\n                <th>Early Bird:</th>\n                <td>$1,369\n                  <p class=\"small\">Sign by 7/24/19</p>\n                </td>\n                <td>$1,369\n                  <p class=\"small\">Sign by 11/1/19</p>\n                </td>\n                <td>$1,369\n                  <p class=\"small\">Sign by 2/21/20</p>\n                </td>\n              </tr>\n              <tr>\n                <th>Value Price:</th>\n                <td>$1,399</td>\n                <td>$1,399</td>\n                <td>$1,399</td>\n              </tr>\n            </table>\n          </div>\n        </div>\n      </section>\n    </div>\n\n    <section class=\"price-lock\">\n        <h2>Want your price forever? Price Lock it</h2>\n        <p>SIGN UP for 2 semesters initially and recieve:</p>\n\n        <div id=\"circle-flex\">\n            <a class=\"circle-tag\">\n              <div class=\"circle\" id=\"low\">\n                <span class=\"first\">Lowest Price</span>\n                <span class=\"second\">The lower semester price, if the 2 semesters are a different price</span>\n              </div>\n            </a>\n            <a class=\"circle-tag\">\n              <div class=\"circle\" id=\"same\">\n                <span class=\"first\">Same Price Forever</span>\n                <span class=\"second\">The same low price LOCKED IN FOREVER!</span>\n              </div>\n            </a>\n          </div>\n\n          <p id=\"notes\">(Contact managers for more details)</p>\n          <ul>Please note:\n            <li>Make sure to sign a new semester contract to least 30 days before the start of that semester and your price will NEVER CHANGE!</li>\n            <li>Exception: Men's Spring housing is discounted $30 off the pricing for Fall & Winter, due to not having A/C in the apartments. Price Lock pricing will be at the normal Fall & Winter price for Fall & Winter, and at the discounted price for Spring.</li>\n            <li>Non-transferable. Cancellation and/or selling of contracts can disqaulify you from price lock deals.</li>\n          </ul>\n\n          <h3 id=\"sub-heading\">Why Price Lock?</h3>\n          <ul>\n            <li>Are you scared of super low \"teaser\" semester rates that skyrocket the next semester?</li>\n            <li>Are you on a budget and want to know exactly how much you can afford stright through graduation?</li>\n            <li>Are you tired of rent rising every year, or even every semester?</li>\n            <li>Would you like to be treated fairly with no super low rate to get you in, followed by an insane high rate the next semester?</li>\n          </ul>\n          <h4>...You have come to the right place</h4>\n\n          <div id=\"button\">\n              <button (click)=\"topFunction()\" id=\"myBtn\">To Top</button>\n            </div>\n      </section>\n      \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script async defer src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBHb_280k8p4DIqmkygUXqj6w2c7E-RTgA&callback=initMap\"\ntype=\"text/javascript\"></script>\n<div class=\"contact-main\">\n  <div class=\"main\">\n    <div class=\"column\">\n      <section id=\"address\">\n        <h1 class=\"main-title\">NAUVOO HOUSE APARTMENTS</h1>\n        <p>175 WEST 5TH SOUTH</p>\n        <p>REXBURG, ID 83440</p>\n      </section>\n\n      <section id=\"contact\">\n        <h2 class=\"title\">APARTMENT MANAGERS</h2>\n        <p>Briana & Bria</p>\n        <p>(208) 356-7756</p>\n        <p><a href=\"mailto:manager@nauvoohouse.com?Subject=Questions%20or%20concerns\" target=\"_top\">Manager@NauvooHouse.com</a></p>\n      </section>\n\n      <section id=\"hours\">\n        <h2 class=\"title\">HOURS</h2>\n        <p>Monday - Friday: 1 - 5 pm</p>\n        <p>or anytime by appointment</p>\n      </section>\n\n      <p>Owned and operated by EdgeCreek</p>\n      <p>(801) 404-5995</p>\n    </div>\n\n    <div class=\"column\">\n      <img src=\"../../assets/new-images/mangers.jpg\">\n    </div>\n  </div>\n</div>\n\n<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=15>\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"'Nauvoo House Apartments'\"></agm-marker>\n</agm-map>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"foot-main\">\n  <div class=\"main\">\n    <div id=\"man-info\">\n      <p class=\"header\">Apartment Managers</p>\n      <p>Briana & Bria</p>\n      <p>(208) 356-7756</p>\n      <p><a href=\"mailto:manager@nauvoohouse.com?Subject=Questions%20or%20concerns\" target=\"_top\">manager@NauvooHouse.com</a></p>\n    </div>\n\n    <div id=\"hours\">\n      <p class=\"header\">Office Hours</p>\n      <p>Monday - Friday</p>\n      <p>1pm - 5pm</p>\n      <p>Or Anytime by Appt.</p>\n    </div>\n\n    <div>\n      <p class=\"header\" id=\"resources\">Resources</p>\n      <ul>\n        <li><a routerLink=\"/404\">Nauvoo History</a></li>\n        <li><a routerLink=\"/404\">Information & Downloads</a></li>\n        <li><a routerLink=\"/404\">Carrers</a></li>\n      </ul>\n    </div>\n  </div>\n\n  <div id=\"very-bottom\">\n    <div id=\"copyright\">\n      <p>&#160;2019 by Nauvoo House</p>\n      <div id=\"social-media\">\n        <a href=\"https://www.facebook.com/NauvooHouse\" target=\"_blank\"><img\n            src=\"../../assets/images/icons/facebook-f-brands.svg\" /></a>\n        <a href=\"https://www.instagram.com/nauvoohouse/\" target=\"_blank\"><img\n            src=\"../../assets/images/icons/instagram-brands.svg\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div class=\"main\">\n    <h1>Gallery</h1>\n\n    <div class=\"gallery-main\">\n      <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<div id=\"nav\" class=\"sidenav\">\n  <div id=\"nav-size\">\n    <a id=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n    <a routerLink=\"/home\" (click)=\"closeNav()\">Home</a>\n    <a routerLink=\"/apartments\" (click)=\"closeNav()\">Apartments & Pricing</a>\n    <a routerLink=\"/amenities\" (click)=\"closeNav()\">Amenities</a>\n    <a routerLink=\"/gallery\" (click)=\"closeNav()\">Gallery</a>\n    <a routerLink=\"/contact\" (click)=\"closeNav()\">Contact</a>\n    <a routerLink=\"/residents\" (click)=\"closeNav()\">Current Residents</a>\n    <a routerLink=\"/sign\" id=\"point-link\" (click)=\"closeNav()\">\n      <div id=\"pointer\">Sign Up Now</div>\n    </a>\n  </div>\n  <div id=\"social-media\">\n    <a href=\"https://www.facebook.com/NauvooHouse\" target=\"_blank\"><img src=\"../../assets/images/icons/facebook-f-brands.svg\" /></a>\n    <a href=\"https://www.instagram.com/nauvoohouse/\" target=\"_blank\"><img src=\"../../assets/images/icons/instagram-brands.svg\"></a>\n  </div>\n</div>\n\n<div class=\"head-main\">\n  <div class=\"main\">\n    <div id=\"img-logo\">\n      <a id=\"menu-toggle\" (click)=\"openNav()\">&#9776;</a>\n    </div>\n\n    <h1 class=\"title\"><a routerLink=\"/home\">Nauvoo House</a></h1>\n\n    <div id=\"resident\">\n      <a routerLink=\"/residents\" class=\"btn-primary\" id=\"resident-btn\">Residents</a>\n      <!-- <div id=\"user\">\n        <a href=\"#\" id=\"log-in\">Log In</a>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n<script>\n  function openNav() {\n    document.getElementById(\"mySidenav\").style.width = \"250px\";\n  }\n\n  function closeNav() {\n    document.getElementById(\"mySidenav\").style.width = \"0\";\n  }\n\n</script>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-main\">\n  <div class=\"main\">\n    <div id=\"pic-background\">\n      <div id=\"semi-circle\">\n        <a routerLink=\"/sign\">Sign a <br> Contract</a>\n      </div>\n      <app-tiles></app-tiles>\n    </div>\n    <section id=\"welcome\">\n      <h2>Welcome to Nauvoo House</h2>\n\n      <div class=\"row\">\n        <div class=\"column\" id=\"gallery\">\n          <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n        </div>\n\n        <div class=\"column\" id=\"text\">\n          <p id=\"sub-head\">The Nauvoo House Difference</p>\n          <p>At Nauvoo House, we understand that your BYU Idaho experience starts and ends with where you live. We want\n            your experience here to be great so we work hard to make the part we play in that great for you.</p>\n          <p>Nauvoo is a favorite for many students at BYU Idaho for a lot of reasons. At the end of the day, the Nauvoo\n            House experience hinges on 3 simple things: Clean, Safe, and Fun living. We strive to make these 3 things\n            our main goals. It's just that simple.</p>\n        </div>\n      </div>\n    </section>\n  </div>\n\n  <div class=\"home-accent\">\n    <section id=\"culture\">\n      <h2>The Nauvoo Culture</h2>\n      <div id=\"circle-flex\">\n        <a class=\"circle-tag\">\n          <div class=\"circle\">\n            <span class=\"first\">Clean</span>\n            <span class=\"second\">Each apartment is sparkling clean and ready for you to relax in with regular cleaning\n              inspections.</span>\n          </div>\n        </a>\n        <a class=\"circle-tag\">\n          <div class=\"circle\" id=\"safe\">\n            <span class=\"first\">Safe</span>\n            <span class=\"second\">Safe is No. 1 and the crew here at Nauvoo strives to keep the property beautiful and\n              safe.</span>\n          </div>\n        </a>\n        <a class=\"circle-tag\">\n          <div class=\"circle\" id=\"fun\">\n            <span class=\"first\">Fun</span>\n            <span class=\"second\">Nauvoo is well known for its great socials and events. We want your time here to be\n              Fun!</span>\n          </div>\n        </a>\n      </div>\n    </section>\n  </div>\n\n  <section id=\"social\">\n    <h2>Nauvoo House is social...Come be social with us!</h2>\n\n    <div class=\"row\">\n      <div class=\"column\" id=\"grid\">\n        <div id=\"s1\" class=\"grid-img\"></div>\n        <div id=\"s2\" class=\"grid-img\"></div>\n        <div id=\"s3\" class=\"grid-img\"></div>\n        <div id=\"s4\" class=\"grid-img\"></div>\n        <div id=\"s5\" class=\"grid-img\"></div>\n        <div id=\"s6\" class=\"grid-img\"></div>\n        <div id=\"s7\" class=\"grid-img\"></div>\n        <div id=\"s8\" class=\"grid-img\"></div>\n        <div id=\"s9\" class=\"grid-img\"></div>\n      </div>\n\n      <div class=\"column\" id=\"text\">\n        <p>Nauvoo House has a social culture unlike any other apartment complex at BYU Idaho. We work hard to make sure\n          that your roommates and neighbors are also your friends. From opening socials each semester to a clubhouse,\n          Fire Pit and other social areas Nauvoo is built around your positive social and educational experience.</p>\n        <br>\n        <p>Follow and like Nauvoo House on Facebook and Instagram to keep updated on parties, prizes, and giveaways.</p>\n\n        <div id=\"social-media\">\n          <a href=\"https://www.facebook.com/NauvooHouse\" target=\"_blank\"><img src=\"../../assets/images/icons/facebook-f-brands.svg\" /></a>\n          <a href=\"https://www.instagram.com/nauvoohouse/\" target=\"_blank\"><img src=\"../../assets/images/icons/instagram-brands.svg\"></a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"home-accent\">\n    <section class=\"reviews\">\n      <h2>Still not sold on Nauvoo?</h2>\n      <p>Don't take our word on how great Nauvoo House is, see what our current<br> and previous tenants have thought\n        about\n        living here.</p>\n      <div class=\"row\">\n        <div class=\"column\" id=\"link-review\">\n          <p id=\"love\">Love Nauvoo House?</p>\n          <p>Leave us a review to let us and others know how your experience was living at Nauvoo House.</p>\n          <a href=\"https://www.google.com/search?q=nauvoo+house+rexburg&oq=nauvoo+house+rexburg&aqs=chrome..69i57j69i60j69i61.4465j0j7&sourceid=chrome&ie=UTF-8#lrd=0x53540b06ed1c2345:0xcdd4d2833b5fc368,1,,,\" target=\"_blank\" id=\"point-link\">\n            <div id=\"pointer\">Review Nauvoo House</div>\n          </a>\n          <p id=\"small-text\">(Current tenants get a prize for leaving a review. Stop by the office for more details.)\n          </p>\n        </div>\n\n        <div class=\"column\">\n          <script type=\"text/javascript\"> \n        var review_token = 'FwLNI5lKYau93pwdHQBgiCtXoeNmwieZcdwFTMw1hp7OiFIraV'; \n        var review_target = 'review-container'; \n        </script> \n        <script src=\"https://reviewsonmywebsite.com/js/embed.js?v=8\" type=\"text/javascript\"></script>\n          <div id=\"review-container\"></div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"address\">\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=15>\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [label]=\"'Nauvoo House Apartments'\"></agm-marker>\n      </agm-map>\n      <div class=\"row\">\n        <div class=\"column\">\n          <p id=\"big-text\">Nauvoo House:<br>\n            175 West 5th South<br>\n            Rexburg, Id 83440</p>\n        </div>\n\n        <div class=\"column\">\n          <p>Only 1 block away from campus. <br>\n            Get to your classes in 5 minutes!</p>\n        </div>\n      </div>\n\n      <a href=\"https://www.google.com/maps/dir//nauvoo+house+rexburg/@43.8115989,-111.7924875,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x53540b06ed1c2345:0xcdd4d2833b5fc368!2m2!1d-111.7887408!2d43.8146038\" target=\"_blank\" id=\"address-link\">\n        <div id=\"directions\">Get Directions</div>\n      </a>\n\n      <div id=\"button\">\n        <button (click)=\"topFunction()\" id=\"myBtn\">To Top</button>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/tiles/tiles.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/tiles/tiles.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"tile-main\">\n  <div class=\"main\">\n\n    <div class=\"tile\">\n      <a routerLink=\"/apartments\">\n        <div id=\"apt\">\n          <div class=\"overlay\">\n            APARTMENTS\n            <hr>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/amenities\">\n        <div id=\"amen\">\n          <div class=\"overlay\">\n            AMENITIES\n            <hr>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/gallery\">\n        <div id=\"gallery\">\n          <div class=\"overlay\">\n            GALLERY\n            <hr>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/contact\">\n        <div id=\"contact\">\n          <div class=\"overlay\">\n            CONTACT\n            <hr>\n          </div>\n        </div>\n      </a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/residents/residents.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/residents/residents.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"resident-main\">\n\n  <h1>Current Residents</h1>\n  <br>\n\n  <div class=\"main\">\n    <div class=\"tile\">\n      <a routerLink=\"/rent\">\n        <div id=\"rent\">\n          <div class=\"overlay\">\n            PAY RENT\n            <hr>\n            <p>Make rent payment through credit card, check or Epayment.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/request\">\n        <div id=\"maintenance\">\n          <div class=\"overlay\">\n            MAINTENANCE REQUEST\n            <hr>\n            <p>Submit a maintenance request for your apartment.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/reservation\">\n        <div id=\"reserve\">\n          <div class=\"overlay\">\n            RESERVATIONS\n            <hr>\n            <p>Reserve the clubhouse of other amenities on the complex calendar.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a href=\"https://app.propertyware.com/pw/portals/edgecreek/tenant.action\">\n        <div id=\"portal\">\n          <div class=\"overlay\">\n            RESIDENT PORTAL\n            <hr>\n            <p>Make an Epayment and see your information.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/sign\">\n        <div id=\"renew\">\n          <div class=\"overlay\">\n            RENEW CONTRACT\n            <hr>\n            <p>Sign in to renew for future semesters.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a href=\"https://web.byui.edu/wardsandstakes\">\n        <div id=\"ward\">\n          <div class=\"overlay\">\n            WARD INFO\n            <hr>\n            <p>Find your ward, bishopic members, meeting times and places.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/report\">\n        <div id=\"report\">\n          <div class=\"overlay\">\n            CONDITION REPORT\n            <hr>\n            <p>Report any damages when you first move in.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n    <div class=\"tile\">\n      <a routerLink=\"/clean\">\n        <div id=\"clean\">\n          <div class=\"overlay\">\n            CLEAN CHECKS\n            <hr>\n            <p>View the clean check schedule, expectations and rules.</p>\n          </div>\n        </div>\n      </a>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sign/sign.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sign/sign.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <section id=\"header\">\n    <div id=\"header-pic\"></div>\n    <h1>Housing Contract</h1>\n    <p>Thank you for chosing Nauvoo House. This is an official contract. Please fill out the required information.\n    </p>\n  </section>\n\n  <div class=\"sign-main\">\n    <section id=\"instruc\">\n      <p>Instructions:</p>\n\n      <ul>\n        <ol>1. You agree and accept the required contract terms by typing your name in the requested signature blocks.\n          This is a standard contract used by all single student approved housing properties at BYU-Idaho.</ol>\n        <ol>2. Payment of the $180 ($150 refundable Security Deposit and $30.00 processing fee) is required for all new\n          tenants and will be collected at the end of this process.</ol>\n        <ol>3. Parking contracts are a seperate contract. You must fill out a seperate parking contract to get parking.\n        </ol>\n      </ul>\n    </section>\n\n    <section id=\"form\">\n      <iframe\n        src=\"https://docs.google.com/forms/d/e/1FAIpQLSf6gj5JNIfOELvizAMm5JIO38y6MnfLTbVmlAi5CV2rqkm9xg/viewform?embedded=true\"\n        width=\"980\" height=\"520\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-pages/clean/clean.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-pages/clean/clean.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <section id=\"header\">\n    <h1>Clean Checks</h1>\n    <p>Clean Checks are Thursdays, every other week, alternating boys & girls. Checks will start around 1:00 pm. All\n      apartments will be checked until the entire complex is complete.\n    </p>\n  </section>\n\n  <div class=\"clean-main\">\n    <section id=\"instruc\">\n      <p>Instructions and tips for clean checks:</p>\n\n      <ul>\n        <ol>1. The Clean Check Sheet is laminated in your apartment on the fridge. This sheet details the expections we\n          will hold you to for each clean check job. It has everything on it you need to pass clean checks. If it is\n          missing, please let management know.</ol>\n        <ol>2. Every Job must be signed up for - no matter how many live in your apartment.</ol>\n        <ol>3. The first clean check we will check for mattress covers. Every bed being used must have a mattress cover\n          on, as required by BYUI. Mattress covers must go around and cover the corners. If you do not have a mattress\n          cover on your bed, we will leave you a reminder and check again the next clean check. If a mattress cover is\n          still not on the bed by the second clean check, we will provide you one and charge you $15.</ol>\n        <ol>4. Also on the first clean check we will be asking for rooming assignments. Please circle your bed letter on\n          the clean check sheet or have someone home during clean checks for our cleaning manager to ask. (First Bed in\n          the apartment closest to the Living Room is Bed A. Last Bed closest to the Bathroom is Bed F)</ol>\n        <ol>5. If you fail a $10.00 recheck fee will be added to your account. Rechecks are on Fridays.</ol>\n      </ul>\n\n      <h2>If your apartment is extra clean, <br> you could earn a Nauvoo Buck!</h2>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-pages/rent/rent.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-pages/rent/rent.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <section id=\"header\">\n    <h1>Pay Rent</h1>\n    <p>Thank you for chosing Nauvoo House. Please review the rent payment options below. All rent and any extra fees\n      (parking, cleaning charges, etc.) are due at the day of check ins for that semester. Please select a payment\n      option and bring it to the office at check ins or be prepared to tell the managers that your prepayed online\n      (please has your payment receipt).\n    </p>\n  </section>\n\n  <div class=\"rent-main\">\n    <section id=\"pay\">\n      <h2>Check/Money Order/Cashier's Check</h2>\n      <p>We accept checks, money orders, or cashier's check in the office. You can bring it into the office or mail it\n        in. To pay by Check please write payment to “Nauvoo House” – 175 W. 5th South. Rexburg, ID 83440.\n        Money orders and cashier's checks can be obtained at most local grocery stores for a small fee (we recommend\n        Walmart or Broulim's).\n      </p>\n\n      <h2>eCheck/Online Payment</h2>\n      <p>You can pay from your bank account via ACH/eCheck by logging on our <a\n          href=\"https://app.propertyware.com/pw/portals/edgecreek/tenant.action\">Resident Portal</a> Site. This is a\n        free service. This requires a login. If you do not know or remember your username or password, please contact\n        the managers for help.\n      </p>\n\n      <h2>Credit Card Online Payment</h2>\n      <p>You can make a <a href=\"https://edgecreek.wufoo.com/forms/q1smd3y71t0qwez/\">Credit Card Payment</a>. Type in\n        the correct amount you would like your card to be charged. A convenience fee will automatically be added. The\n        completed order will be submitted to the Manager for approval. Please allow 1-3 days to process. A payment\n        confirmation will be emailed to you once the payment is applied.\n      </p>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-pages/report/report.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-pages/report/report.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <section id=\"header\">\n    <h1>Condition Report</h1>\n    <p>Condition Reports let management and maintenance know the condition of the apartments. Also, you can report any\n      privous damages done to your apartment so you don't get charged for them and they get fixed.\n    </p>\n  </section>\n\n  <div class=\"report-main\">\n    <section id=\"instruc\">\n      <p>Please fill out the form below as the first thing you do when you move in:</p>\n    </section>\n\n    <section id=\"google\">\n      <iframe\n        src=\"https://docs.google.com/forms/d/e/1FAIpQLSdmL51ETLuasBXNZgXNQ4fGeORY68_5EZIuuNMz9QINwBvQtg/viewform?embedded=true\"\n        width=\"980\" height=\"4114\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-pages/request/request.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-pages/request/request.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <section id=\"header\">\n    <h1>Maintenance Request</h1>\n    <p>Your maintenance concerns are very important to us! Please don't hesitate to turn in a Maintenance Request for\n      Maintenance to fix even the smallest thing! We have a full time crew just waiting to help you.\n    </p>\n  </section>\n\n  <div class=\"request-main\">\n    <section id=\"instruc\">\n      <p>Please be as specific as possible when making your request. Please refer to the images below if you have any\n        questions about which bathroom or bedroom needs maintenance.</p>\n\n      <div class=\"row\">\n        <div class=\"column\" id=\"left\"></div>\n\n        <div class=\"column\" id=\"right\"></div>\n      </div>\n    </section>\n\n    <section id=\"form\">\n      <form>\n        <label>First Name: </label><br>\n        <input type=\"text\" name=\"firstname\" required><br>\n        <label>Last Name: </label><br>\n        <input type=\"text\" name=\"lastname\" required><br>\n        <label>Email: </label><br>\n        <input type=\"text\" name=\"email\" required><br>\n        <label>Phone Number: </label><br>\n        <input type=\"text\" name=\"phone\" required><br>\n        <label>Apartment #: </label><br>\n        <input type=\"text\" name=\"apt\" required><br>\n        <label>Location of Problem: </label><br>\n        <input type=\"text\" name=\"location\" required><br>\n        <label>Problem Description: </label><br>\n        <textarea rows=\"4\" cols=\"50\" required></textarea><br>\n        <input type=\"submit\" value=\"Submit\"><br>\n      </form>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sub-pages/reserve/reserve.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sub-pages/reserve/reserve.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <section id=\"header\">\n      <h1>Amenity Reservation</h1>\n      <p>Nauvoo House amenities are free for tenants to use. We just ask that you help us keep them nice and clean for\n        years to come by cleaning up after yourselves.\n      </p>\n    </section>\n\n  <div class=\"reserve-main\">\n    <section id=\"instruc\">\n      <p>How to reserve an amenity:</p>\n      <ul>\n        <ol>1. Look at your desired reservation date and time on the calendar below to make sure that amenity is not\n          already reserved.</ol>\n        <ol>2. If it is available, please fill out the form to reserve the amenity; putting the date, time and your contact\n          information.</ol>\n        <ol>3. Nauvoo House management will then receive your reservation request and will either approve or deny it (Reservations may be\n          denied if the amenity is already reserved.)</ol>\n        <ol>4. Nauvoo House management will send you an email with the their approval response and any other instructions\n          you may need about the amenity.</ol>\n      </ul>\n      <p>(Please note that reservations for weekends must be submitted on later than Friday at 4:30PM. Management is not in the\n        office over the weekend and thus will not be able to process your reservation. Please plan accordingly.)</p>\n    </section>\n\n    <section id=\"google\">\n        <iframe src=\"https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FDenver&amp;src=ZDhtcXA4Z3Q5dTI5NDdjdG9pZjcwZGoxbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;showNav=1&amp;showPrint=0\" style=\"border-width:0\" width=\"980\" height=\"600\" frameborder=\"0\" scrolling=\"no\"></iframe>\n        <br>\n        <iframe src=\"https://docs.google.com/forms/d/e/1FAIpQLSdI2186M6hiZJJLzxypW6GmD6nXZqoInt5x5ubLm0azbPNYMQ/viewform?embedded=true\" width=\"980\" height=\"2217\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\">Loading...</iframe>    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/amenities/amenities.component.scss":
/*!****************************************************!*\
  !*** ./src/app/amenities/amenities.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.amenity-main {\n  background: #c6c6c6;\n  margin-top: 100px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 575px;\n  margin: auto;\n  line-height: 23px;\n  margin-bottom: 30px;\n  font-weight: 100;\n}\n#pic-tiles {\n  background-color: #fff;\n}\n#mid-section {\n  max-width: 980px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 36px;\n  color: #fff;\n  text-align: center;\n  background: #78C445;\n  width: 980px;\n  margin: auto;\n  padding: 5px 0;\n}\n#mid-section img {\n  width: 490px;\n  height: 252px;\n}\n.container {\n  position: relative;\n}\n.text-position {\n  position: absolute;\n  bottom: 10px;\n  left: 20px;\n  font-family: Helvetica, sans-serif;\n  font-size: 35px;\n  color: #fff;\n  font-weight: bold;\n  line-height: 95%;\n  text-shadow: 1px 1px #000;\n}\n#clubhouse {\n  margin-bottom: 2px;\n}\n#apt-amenity {\n  max-width: 980px;\n  margin: auto;\n}\n.heading {\n  font-family: Helvetica, sans-serif;\n  font-size: 22px;\n  font-weight: 100;\n  padding-left: 20px;\n}\n.list-head {\n  font-family: Helvetica, sans-serif;\n  font-size: 19px;\n  font-weight: 100;\n  margin: 0;\n}\nul {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 100;\n  margin: 0;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-basis: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding-left: 40px;\n  margin-bottom: 10px;\n}\n#uti,\n#list {\n  text-align: center;\n  margin: 0;\n}\n#list {\n  padding-bottom: 10px;\n  font-size: 20px;\n}\n#button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#myBtn {\n  width: 65px;\n  height: 65px;\n  font-size: 15px;\n  background-color: #B6DF9B;\n  cursor: pointer;\n  border-radius: 50px;\n  font-family: Helvetica, sans-serif;\n  font-weight: 100;\n  outline: none;\n  border: none;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);\n  margin: 10px 0 15px 0;\n}\n#myBtn:hover {\n  background-color: #4D8229;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1lbml0aWVzL0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxcYW1lbml0aWVzXFxhbWVuaXRpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FtZW5pdGllcy9hbWVuaXRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0Usc0JBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0xGO0FEUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xGO0FEUUE7O0VBRUUsa0JBQUE7RUFDQSxTQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEU0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDTko7QURTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtBQ05GO0FEU0E7RUFDRSx5QkFBQTtBQ05GIiwiZmlsZSI6InNyYy9hcHAvYW1lbml0aWVzL2FtZW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi5hbWVuaXR5LW1haW4ge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG4jaGVhZGVyIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgd2lkdGg6IDU3NXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiNwaWMtdGlsZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNtaWQtc2VjdGlvbiB7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG59XHJcblxyXG4jbWlkLXNlY3Rpb24gaW1nIHtcclxuICB3aWR0aDogNDkwcHg7XHJcbiAgaGVpZ2h0OiAyNTJweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udGV4dC1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiA5NSU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggIzAwMDtcclxufVxyXG5cclxuI2NsdWJob3VzZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4jYXB0LWFtZW5pdHkge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaGVhZGluZyB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5saXN0LWhlYWQge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiN1dGksXHJcbiNsaXN0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jbGlzdCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4vL3RvIHRvcCBidXR0b25cclxuI2J1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZERjlCO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG59XHJcblxyXG4jbXlCdG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDgyMjk7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuLmFtZW5pdHktbWFpbiB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xufVxuXG4jaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA1NzVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuI3BpYy10aWxlcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNtaWQtc2VjdGlvbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG5oMiB7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XG4gIHdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuI21pZC1zZWN0aW9uIGltZyB7XG4gIHdpZHRoOiA0OTBweDtcbiAgaGVpZ2h0OiAyNTJweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRleHQtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgbGVmdDogMjBweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA5NSU7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4ICMwMDA7XG59XG5cbiNjbHViaG91c2Uge1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbiNhcHQtYW1lbml0eSB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhlYWRpbmcge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmxpc3QtaGVhZCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG51bCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtYmFzaXM6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuI3V0aSxcbiNsaXN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbiNsaXN0IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI2J1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbXlCdG4ge1xuICB3aWR0aDogNjVweDtcbiAgaGVpZ2h0OiA2NXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNkRGOUI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIG1hcmdpbjogMTBweCAwIDE1cHggMDtcbn1cblxuI215QnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREODIyOTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/amenities/amenities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/amenities/amenities.component.ts ***!
  \**************************************************/
/*! exports provided: AmenitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmenitiesComponent", function() { return AmenitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AmenitiesComponent = /** @class */ (function () {
    function AmenitiesComponent() {
    }
    AmenitiesComponent.prototype.ngOnInit = function () {
    };
    AmenitiesComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    AmenitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-amenities',
            template: __webpack_require__(/*! raw-loader!./amenities.component.html */ "./node_modules/raw-loader/index.js!./src/app/amenities/amenities.component.html"),
            styles: [__webpack_require__(/*! ./amenities.component.scss */ "./src/app/amenities/amenities.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AmenitiesComponent);
    return AmenitiesComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _apt_apt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apt/apt.component */ "./src/app/apt/apt.component.ts");
/* harmony import */ var _amenities_amenities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./amenities/amenities.component */ "./src/app/amenities/amenities.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _residents_residents_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./residents/residents.component */ "./src/app/residents/residents.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _sub_pages_rent_rent_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sub-pages/rent/rent.component */ "./src/app/sub-pages/rent/rent.component.ts");
/* harmony import */ var _sub_pages_request_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sub-pages/request/request.component */ "./src/app/sub-pages/request/request.component.ts");
/* harmony import */ var _sub_pages_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub-pages/reserve/reserve.component */ "./src/app/sub-pages/reserve/reserve.component.ts");
/* harmony import */ var _sub_pages_report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub-pages/report/report.component */ "./src/app/sub-pages/report/report.component.ts");
/* harmony import */ var _sub_pages_clean_clean_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sub-pages/clean/clean.component */ "./src/app/sub-pages/clean/clean.component.ts");















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'apartments', component: _apt_apt_component__WEBPACK_IMPORTED_MODULE_4__["AptComponent"] },
    { path: 'amenities', component: _amenities_amenities_component__WEBPACK_IMPORTED_MODULE_5__["AmenitiesComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_6__["GalleryComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'residents', component: _residents_residents_component__WEBPACK_IMPORTED_MODULE_8__["ResidentsComponent"] },
    { path: 'sign', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_9__["SignComponent"] },
    { path: 'rent', component: _sub_pages_rent_rent_component__WEBPACK_IMPORTED_MODULE_10__["RentComponent"] },
    { path: 'request', component: _sub_pages_request_request_component__WEBPACK_IMPORTED_MODULE_11__["RequestComponent"] },
    { path: 'reservation', component: _sub_pages_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_12__["ReserveComponent"] },
    { path: 'report', component: _sub_pages_report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"] },
    { path: 'clean', component: _sub_pages_clean_clean_component__WEBPACK_IMPORTED_MODULE_14__["CleanComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        this.title = 'NH';
    }
    AppComponent.prototype.onActivate = function (event) {
        window.scroll(0, 0);
        // if (isPlatformBrowser(this.platformId)) {
        //   let scrollToTop = window.setInterval(() => {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //       window.scrollTo(0, pos - 50); // how far to scroll on each step
        //     } else {
        //       window.clearInterval(scrollToTop);
        //     }
        //   }, 16);
        // }
    };
    AppComponent.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"],] }] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, String])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_tiles_tiles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/tiles/tiles.component */ "./src/app/home/tiles/tiles.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _residents_residents_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./residents/residents.component */ "./src/app/residents/residents.component.ts");
/* harmony import */ var _apt_apt_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./apt/apt.component */ "./src/app/apt/apt.component.ts");
/* harmony import */ var _amenities_amenities_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./amenities/amenities.component */ "./src/app/amenities/amenities.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _sub_pages_rent_rent_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sub-pages/rent/rent.component */ "./src/app/sub-pages/rent/rent.component.ts");
/* harmony import */ var _sub_pages_request_request_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sub-pages/request/request.component */ "./src/app/sub-pages/request/request.component.ts");
/* harmony import */ var _sub_pages_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sub-pages/reserve/reserve.component */ "./src/app/sub-pages/reserve/reserve.component.ts");
/* harmony import */ var _sub_pages_report_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sub-pages/report/report.component */ "./src/app/sub-pages/report/report.component.ts");
/* harmony import */ var _sub_pages_clean_clean_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sub-pages/clean/clean.component */ "./src/app/sub-pages/clean/clean.component.ts");






















// import { MatGridTileComponent } from './home/mat-grid-tile/mat-grid-tile.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _home_tiles_tiles_component__WEBPACK_IMPORTED_MODULE_9__["TilesComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _residents_residents_component__WEBPACK_IMPORTED_MODULE_12__["ResidentsComponent"],
                _apt_apt_component__WEBPACK_IMPORTED_MODULE_13__["AptComponent"],
                _amenities_amenities_component__WEBPACK_IMPORTED_MODULE_14__["AmenitiesComponent"],
                _sign_sign_component__WEBPACK_IMPORTED_MODULE_15__["SignComponent"],
                _sub_pages_rent_rent_component__WEBPACK_IMPORTED_MODULE_17__["RentComponent"],
                _sub_pages_request_request_component__WEBPACK_IMPORTED_MODULE_18__["RequestComponent"],
                _sub_pages_reserve_reserve_component__WEBPACK_IMPORTED_MODULE_19__["ReserveComponent"],
                _sub_pages_report_report_component__WEBPACK_IMPORTED_MODULE_20__["ReportComponent"],
                _sub_pages_clean_clean_component__WEBPACK_IMPORTED_MODULE_21__["CleanComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_3__["NgxGalleryModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBHb_280k8p4DIqmkygUXqj6w2c7E-RTgA'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apt/apt.component.scss":
/*!****************************************!*\
  !*** ./src/app/apt/apt.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.apt-main {\n  background: #c6c6c6;\n  margin-top: 100px;\n}\n.apt-white {\n  background-color: #fff;\n}\na {\n  text-decoration: none;\n}\n#header-pic {\n  background-image: url('parking-lot.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  height: 415px;\n  width: 100%;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header {\n  margin-bottom: 30px;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 575px;\n  margin: auto;\n  line-height: 23px;\n  margin-bottom: 30px;\n  font-weight: 100;\n}\n#view-apt {\n  max-width: 980px;\n  margin: auto;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 36px;\n  color: #fff;\n  text-align: center;\n  background: #78C445;\n  width: 980px;\n  margin: auto;\n  padding: 5px 0;\n}\n#view-apt p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: center;\n  font-weight: 200;\n  margin-bottom: 0;\n}\n#floorplan {\n  background-image: url('floorplan1.jpg');\n  width: 410px;\n  height: 335px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n#mens,\n#womens {\n  max-width: 980px;\n  margin: auto;\n}\n#mens h2,\n#womens h2 {\n  letter-spacing: -5px;\n}\n#nh1 img,\n#nh2 img {\n  width: 268px;\n  height: 250px;\n  margin: 20px 0 50px 0;\n}\n#nh1-info,\n#nh2-info {\n  width: 600px;\n}\n.info {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 100;\n}\n.info p {\n  margin-bottom: 2px;\n}\nul {\n  margin-top: 0;\n}\n.avail-list {\n  list-style: none;\n  padding-left: 20px;\n}\n#avail li {\n  padding: 5px 0;\n}\n.avail {\n  margin: -28px 0 0 130px;\n  color: #78C445;\n  font-weight: bold;\n}\n.full {\n  margin: -28px 0 0 130px;\n  color: rgba(233, 0, 0, 0.918);\n  font-weight: bold;\n}\n.row.info {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.price-lock {\n  max-width: 980px;\n  margin: auto;\n}\n.price-lock h2 {\n  letter-spacing: -5px;\n  font-size: 32px;\n}\n.price-lock p {\n  font-family: Helvetica, sans-serif;\n  font-size: 20px;\n  font-weight: 200;\n}\n#notes {\n  font-size: 16px;\n  text-align: center;\n  margin: 0;\n}\n.price-lock ul {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  width: 690px;\n  margin: auto;\n}\n#sub-heading {\n  font-family: Lulo;\n  font-size: 36px;\n  text-align: center;\n  margin-top: 30px;\n  color: rgba(111, 182, 64, 0.938);\n}\nh4 {\n  font-family: Lulo;\n  font-size: 18px;\n  letter-spacing: 0;\n  text-align: center;\n  color: rgba(111, 182, 64, 0.938);\n  margin-bottom: 15px;\n}\ntable {\n  font-family: Helvetica, sans-serif;\n  font-size: 20px;\n  text-align: center;\n  border-collapse: collapse;\n  margin-bottom: 20px;\n}\n.small {\n  font-size: 13px;\n  margin: 2px;\n}\ntable tr {\n  border-bottom: 2px solid #aaaaaa;\n}\ntable tr:last-child {\n  border-bottom: none;\n}\ntable td,\nth {\n  border-left: 2px solid #aaaaaa;\n}\ntable td:first-child,\nth:first-child {\n  border-left: none;\n}\nth,\ntd {\n  padding: 5px 12px;\n}\n.pointer {\n  width: 240px;\n  height: 60px;\n  position: relative;\n  background: #78C445;\n  color: #fff;\n  font-family: Helvetica, sans-serif;\n  font-size: 28px;\n  font-weight: bold;\n  text-align: center;\n  padding: 3.5%;\n  margin: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.pointer:before {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 30px solid #78C445;\n  border-top: 30px solid transparent;\n  border-bottom: 30px solid transparent;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.pointer:hover {\n  background: #696969;\n}\n.pointer:hover::before {\n  border-left: 30px solid #696969;\n}\n.point-link:hover {\n  background-color: transparent;\n}\n#circle-flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.circle {\n  width: 230px;\n  height: 230px;\n  border-radius: 50%;\n  font-size: 24px;\n  font-family: Lulo;\n  color: #fff;\n  text-align: center;\n  background: #78C445;\n  padding: 0 13%;\n  overflow: hidden;\n  margin: 20px 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n.circle:hover {\n  background-color: #4D8229;\n}\n.circle .first {\n  line-height: 30px;\n}\n.circle .second {\n  display: none;\n}\n.circle:hover .first {\n  display: none;\n}\n.circle:hover .second {\n  display: inline-block;\n  font-family: Helvetica, sans-serif;\n  font-size: 25px;\n  line-height: 28px;\n}\nngx-gallery {\n  margin: 20px 0;\n}\nngx-gallery ::ng-deep .ngx-gallery-image.ngx-gallery-active {\n  z-index: 1;\n}\nngx-gallery ::ng-deep .ngx-gallery-arrow-wrapper {\n  z-index: 2;\n}\n#button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#myBtn {\n  width: 65px;\n  height: 65px;\n  font-size: 15px;\n  background-color: #B6DF9B;\n  cursor: pointer;\n  border-radius: 50px;\n  font-family: Helvetica, sans-serif;\n  font-weight: 100;\n  outline: none;\n  border: none;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);\n  margin: 10px 0 15px 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#myBtn:hover {\n  background-color: #4D8229;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXB0L0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxcYXB0XFxhcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwdC9hcHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLHNCQUFBO0FDTEY7QURRQTtFQUNFLHFCQUFBO0FDTEY7QURRQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDTEY7QURRQTs7RUFFRSxnQkFBQTtFQUNBLFlBQUE7QUNMRjtBRFFBOztFQUVFLG9CQUFBO0FDTEY7QURRQTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FDTEY7QURRQTs7RUFFRSxZQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0FDTEY7QURRQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ0xGO0FEUUE7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFNBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDTkY7QURTQTtFQUNFLGdDQUFBO0FDTkY7QURTQTtFQUNFLG1CQUFBO0FDTkY7QURTQTs7RUFFRSw4QkFBQTtBQ05GO0FEU0E7O0VBRUUsaUJBQUE7QUNORjtBRFNBOztFQUVFLGlCQUFBO0FDTkY7QURVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0FDUEY7QURVQTtFQUNFLCtCQUFBO0FDUEY7QURVQTtFQUNFLDZCQUFBO0FDUEY7QURXQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSx5QkFBQTtBQ1JGO0FEV0E7RUFDRSxpQkFBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7QUNSRjtBRFdBO0VBQ0UscUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1JGO0FEYUE7RUFDRSxjQUFBO0FDVkY7QURhQTtFQUNFLFVBQUE7QUNWRjtBRGFBO0VBQ0UsVUFBQTtBQ1ZGO0FEY0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDWEY7QURjQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNYRjtBRGNBO0VBQ0UseUJBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2FwdC9hcHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4uYXB0LW1haW4ge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5hcHQtd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI2hlYWRlci1waWMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbmV3LWltYWdlcy9wYXJraW5nLWxvdC5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDQxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuI2hlYWRlciBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiA1NzVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4jdmlldy1hcHQge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xyXG4gIHdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbiN2aWV3LWFwdCBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZmxvb3JwbGFuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL25ldy1pbWFnZXMvZmxvb3JwbGFuMS5qcGcpO1xyXG4gIHdpZHRoOiA0MTBweDtcclxuICBoZWlnaHQ6IDMzNXB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4jbWVucyxcclxuI3dvbWVucyB7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNtZW5zIGgyLFxyXG4jd29tZW5zIGgyIHtcclxuICBsZXR0ZXItc3BhY2luZzogLTVweDtcclxufVxyXG5cclxuI25oMSBpbWcsXHJcbiNuaDIgaW1nIHtcclxuICB3aWR0aDogMjY4cHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XHJcbn1cclxuXHJcbiNuaDEtaW5mbyxcclxuI25oMi1pbmZvIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uaW5mbyBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG4uYXZhaWwtbGlzdCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbiNhdmFpbCBsaSB7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5hdmFpbCB7XHJcbiAgbWFyZ2luOiAtMjhweCAwIDAgMTMwcHg7XHJcbiAgY29sb3I6ICM3OEM0NDU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mdWxsIHtcclxuICBtYXJnaW46IC0yOHB4IDAgMCAxMzBweDtcclxuICBjb2xvcjogcmdiYSgyMzMsIDAsIDAsIDAuOTE4KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJvdy5pbmZvIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcmljZS1sb2NrIHtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnByaWNlLWxvY2sgaDIge1xyXG4gIGxldHRlci1zcGFjaW5nOiAtNXB4O1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnByaWNlLWxvY2sgcCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuI25vdGVzIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMFxyXG59XHJcblxyXG4ucHJpY2UtbG9jayB1bCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgd2lkdGg6IDY5MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3N1Yi1oZWFkaW5nIHtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgY29sb3I6IHJnYmEoMTExLCAxODIsIDY0LCAwLjkzOCk7XHJcbn1cclxuXHJcbmg0IHtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2JhKDExMSwgMTgyLCA2NCwgMC45MzgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi8vcHJpY2UgdGFibGVzXHJcbnRhYmxlIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW46IDJweDtcclxufVxyXG5cclxudGFibGUgdHIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYWFhYWFhO1xyXG59XHJcblxyXG50YWJsZSB0cjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG50YWJsZSB0ZCxcclxudGgge1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2FhYWFhYTtcclxufVxyXG5cclxudGFibGUgdGQ6Zmlyc3QtY2hpbGQsXHJcbnRoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxudGgsXHJcbnRkIHtcclxuICBwYWRkaW5nOiA1cHggMTJweDtcclxufVxyXG5cclxuLy9zaWduIHVwIG5vdyBidXR0b25zXHJcbi5wb2ludGVyIHtcclxuICB3aWR0aDogMjQwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzLjUlO1xyXG4gIG1hcmdpbjogMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4ucG9pbnRlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMzBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICM3OEM0NDU7XHJcbiAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5wb2ludGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xyXG59XHJcblxyXG4ucG9pbnRlcjpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjNjk2OTY5O1xyXG59XHJcblxyXG4ucG9pbnQtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8vcHJpY2UgbG9jayBjaXJjbGVzXHJcbiNjaXJjbGUtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcclxuICBwYWRkaW5nOiAwIDEzJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY2lyY2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ4MjI5O1xyXG59XHJcblxyXG4uY2lyY2xlIC5maXJzdCB7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGUgLnNlY29uZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNpcmNsZTpob3ZlciAuZmlyc3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jaXJjbGU6aG92ZXIgLnNlY29uZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5cclxuLy9nYWxsZXJ5XHJcbm5neC1nYWxsZXJ5IHtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5cclxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1pbWFnZS5uZ3gtZ2FsbGVyeS1hY3RpdmUge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbm5neC1nYWxsZXJ5IDo6bmctZGVlcCAubmd4LWdhbGxlcnktYXJyb3ctd3JhcHBlciB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLy90byB0b3AgYnV0dG9uXHJcbiNidXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNteUJ0biB7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZERjlCO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNteUJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREODIyOTtcclxufVxyXG4iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG4uYXB0LW1haW4ge1xuICBiYWNrZ3JvdW5kOiAjYzZjNmM2O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmFwdC13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNoZWFkZXItcGljIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9uZXctaW1hZ2VzL3BhcmtpbmctbG90LmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcbn1cblxuI2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNoZWFkZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDU3NXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4jdmlldy1hcHQge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmgyIHtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcbiAgd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4jdmlldy1hcHQgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogMjAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jZmxvb3JwbGFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9uZXctaW1hZ2VzL2Zsb29ycGxhbjEuanBnKTtcbiAgd2lkdGg6IDQxMHB4O1xuICBoZWlnaHQ6IDMzNXB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbiNtZW5zLFxuI3dvbWVucyB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI21lbnMgaDIsXG4jd29tZW5zIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC01cHg7XG59XG5cbiNuaDEgaW1nLFxuI25oMiBpbWcge1xuICB3aWR0aDogMjY4cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMjBweCAwIDUwcHggMDtcbn1cblxuI25oMS1pbmZvLFxuI25oMi1pbmZvIHtcbiAgd2lkdGg6IDYwMHB4O1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmluZm8gcCB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxudWwge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uYXZhaWwtbGlzdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuI2F2YWlsIGxpIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5hdmFpbCB7XG4gIG1hcmdpbjogLTI4cHggMCAwIDEzMHB4O1xuICBjb2xvcjogIzc4QzQ0NTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mdWxsIHtcbiAgbWFyZ2luOiAtMjhweCAwIDAgMTMwcHg7XG4gIGNvbG9yOiByZ2JhKDIzMywgMCwgMCwgMC45MTgpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvdy5pbmZvIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpY2UtbG9jayB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnByaWNlLWxvY2sgaDIge1xuICBsZXR0ZXItc3BhY2luZzogLTVweDtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG4ucHJpY2UtbG9jayBwIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4jbm90ZXMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJpY2UtbG9jayB1bCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDY5MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbiNzdWItaGVhZGluZyB7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgY29sb3I6IHJnYmEoMTExLCAxODIsIDY0LCAwLjkzOCk7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMTExLCAxODIsIDY0LCAwLjkzOCk7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAycHg7XG59XG5cbnRhYmxlIHRyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhYWFhYWE7XG59XG5cbnRhYmxlIHRyOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG50YWJsZSB0ZCxcbnRoIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjYWFhYWFhO1xufVxuXG50YWJsZSB0ZDpmaXJzdC1jaGlsZCxcbnRoOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbnRoLFxudGQge1xuICBwYWRkaW5nOiA1cHggMTJweDtcbn1cblxuLnBvaW50ZXIge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzLjUlO1xuICBtYXJnaW46IDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wb2ludGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0zMHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICM3OEM0NDU7XG4gIGJvcmRlci10b3A6IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDMwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5wb2ludGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzY5Njk2OTtcbn1cblxuLnBvaW50ZXI6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICM2OTY5Njk7XG59XG5cbi5wb2ludC1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNjaXJjbGUtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDIzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XG4gIHBhZGRpbmc6IDAgMTMlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDIwcHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5jaXJjbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ4MjI5O1xufVxuXG4uY2lyY2xlIC5maXJzdCB7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG4uY2lyY2xlIC5zZWNvbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2lyY2xlOmhvdmVyIC5maXJzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNlY29uZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxubmd4LWdhbGxlcnkge1xuICBtYXJnaW46IDIwcHggMDtcbn1cblxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1pbWFnZS5uZ3gtZ2FsbGVyeS1hY3RpdmUge1xuICB6LWluZGV4OiAxO1xufVxuXG5uZ3gtZ2FsbGVyeSA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIge1xuICB6LWluZGV4OiAyO1xufVxuXG4jYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNteUJ0biB7XG4gIHdpZHRoOiA2NXB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I2REY5QjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgbWFyZ2luOiAxMHB4IDAgMTVweCAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jbXlCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ4MjI5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/apt/apt.component.ts":
/*!**************************************!*\
  !*** ./src/app/apt/apt.component.ts ***!
  \**************************************/
/*! exports provided: AptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptComponent", function() { return AptComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var AptComponent = /** @class */ (function () {
    function AptComponent() {
        this.blockText = "All housing options at Nauvoo House apartments are for shared bedrooms. Sign up early for discounts!";
    }
    AptComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                "imageAutoPlay": true,
                "imageAutoPlayPauseOnHover": true,
                "previewAutoPlay": true,
                "previewAutoPlayPauseOnHover": true,
                "previewFullscreen": true,
                "previewKeyboardNavigation": true
            },
            {
                width: '480px',
                height: '355px',
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }
        ];
        this.galleryImages = [{
                small: '../../assets/new-images/kitchen.jpg',
                medium: '../../assets/new-images/kitchen.jpg',
                big: '../../assets/new-images/kitchen.jpg'
            },
            {
                small: '../../assets/new-images/kitchen2.jpg',
                medium: '../../assets/new-images/kitchen2.jpg',
                big: '../../assets/new-images/kitchen2.jpg'
            },
            {
                small: '../../assets/new-images/kitchen4.jpg',
                medium: '../../assets/new-images/kitchen4.jpg',
                big: '../../assets/new-images/kitchen4.jpg'
            },
            {
                small: '../../assets/new-images/kitchen6.jpg',
                medium: '../../assets/new-images/kitchen6.jpg',
                big: '../../assets/new-images/kitchen6.jpg'
            },
            {
                small: '../../assets/new-images/kitchen3.jpg',
                medium: '../../assets/new-images/kitchen3.jpg',
                big: '../../assets/new-images/kitchen3.jpg'
            },
            {
                small: '../../assets/new-images/livingroom1.jpg',
                medium: '../../assets/new-images/livingroom1.jpg',
                big: '../../assets/new-images/livingroom1.jpg'
            },
            {
                small: '../../assets/new-images/hallway.jpg',
                medium: '../../assets/new-images/hallway.jpg',
                big: '../../assets/new-images/hallway.jpg'
            },
            {
                small: '../../assets/new-images/bedroom-girls.jpg',
                medium: '../../assets/new-images/bedroom-girls.jpg',
                big: '../../assets/new-images/bedroom-girls.jpg'
            },
            {
                small: '../../assets/new-images/bed-boys.jpg',
                medium: '../../assets/new-images/bed-boys.jpg',
                big: '../../assets/new-images/bed-boys.jpg'
            },
            {
                small: '../../assets/new-images/bed-closet.jpg',
                medium: '../../assets/new-images/bed-closet.jpg',
                big: '../../assets/new-images/bed-closet.jpg'
            },
            {
                small: '../../assets/new-images/bathroom1.jpg',
                medium: '../../assets/new-images/bathroom1.jpg',
                big: '../../assets/new-images/bathroom1.jpg'
            },
            {
                small: '../../assets/new-images/bathroom3.jpg',
                medium: '../../assets/new-images/bathroom3.jpg',
                big: '../../assets/new-images/bathroom3.jpg'
            },
            {
                small: '../../assets/new-images/w-d.jpg',
                medium: '../../assets/new-images/w-d.jpg',
                big: '../../assets/new-images/w-d.jpg'
            },
        ];
    };
    AptComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    AptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apt',
            template: __webpack_require__(/*! raw-loader!./apt.component.html */ "./node_modules/raw-loader/index.js!./src/app/apt/apt.component.html"),
            styles: [__webpack_require__(/*! ./apt.component.scss */ "./src/app/apt/apt.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AptComponent);
    return AptComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.contact-main {\n  background: #e0e0e0;\n  margin-top: 100px;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  max-width: 980px;\n  margin: auto;\n}\n.column {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-basis: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\nagm-map {\n  width: 100%;\n  height: 400px;\n}\nimg {\n  height: 540px;\n}\nh1 {\n  font-family: Lulo;\n  font-size: 28px;\n  text-align: center;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 18px;\n  text-align: center;\n}\np {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  margin: 0;\n  font-weight: 100;\n}\n#address, #contact, #hours {\n  margin-bottom: 20px;\n}\n#hours {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtR0FBQTtBQUVSO0VBQVksbUJBQUE7RUFDUiwwRUFBQTtFQUNBLGllQUFBO0FDQ0o7QURNQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0pKO0FET0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0pKO0FEWUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ1RKO0FEWUE7RUFDSSxhQUFBO0FDVEo7QURZQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVEo7QURZQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVEo7QURZQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUNJLG1CQUFBO0FDVEo7QURZQTtFQUNJLG1CQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xyXG4gICAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLmNvbnRhY3QtbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWF4LXdpZHRoOiA5ODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4vLyAjbWFwIHtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA0MDBweDtcclxuLy8gfVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDU0MHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LWZhbWlseTogTHVsbztcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiNhZGRyZXNzLCAjY29udGFjdCwgI2hvdXJzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbiNob3VycyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5cclxuIiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuLmNvbnRhY3QtbWFpbiB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1iYXNpczogMTAwJTtcbiAgZmxleDogMTtcbn1cblxuYWdtLW1hcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDU0MHB4O1xufVxuXG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4jYWRkcmVzcywgI2NvbnRhY3QsICNob3VycyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbiNob3VycyB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        // @ViewChild('map') mapElement: any;
        // map: google.maps.Map;
        this.title = 'Nauvoo House';
        this.lat = 43.814642;
        this.lng = -111.788742;
    }
    ContactComponent.prototype.ngOnInit = function () {
        // const mapProperties = {
        //      center: new google.maps.LatLng(35.2271, -80.8431),
        //      zoom: 15,
        //      mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
        // this.map = new google.maps.Map(this.mapElement.nativeElement,    
        //   mapProperties);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foot-main {\n  background: #78C445;\n  color: #000;\n  font-family: Helvetica, sans-serif;\n}\n\n.main {\n  display: -webkit-box;\n  display: flex;\n  max-width: 980px;\n  margin: auto;\n  max-height: 245px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.header {\n  font-size: 22px;\n  padding-bottom: 22px;\n  font-weight: bold;\n}\n\np {\n  line-height: 7px;\n  font-weight: 200;\n}\n\nul {\n  margin-top: 0;\n  padding-left: 20px;\n  top: -2px;\n}\n\n#resources {\n  padding-bottom: 15px;\n}\n\n#very-bottom {\n  background-color: #c6c6c6;\n}\n\n#copyright {\n  height: 55px;\n  max-width: 980px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n#social-media {\n  max-width: 100px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n#social-media img {\n  width: 42px;\n  height: 42px;\n}\n\n#social-media a:hover {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3QtbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWF4LXdpZHRoOiA5ODBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IDI0NXB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB0b3A6IC0ycHg7XHJcbn1cclxuXHJcbiNyZXNvdXJjZXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbiN2ZXJ5LWJvdHRvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xyXG59XHJcblxyXG4jY29weXJpZ2h0IHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIG1heC13aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI3NvY2lhbC1tZWRpYSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgI3NvY2lhbC1tZWRpYSBpbWcge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgfVxyXG4gIFxyXG4gICNzb2NpYWwtbWVkaWEgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9IiwiLmZvb3QtbWFpbiB7XG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LWhlaWdodDogMjQ1cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgcGFkZGluZy1ib3R0b206IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDdweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxudWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbn1cblxuI3Jlc291cmNlcyB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4jdmVyeS1ib3R0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzZjNmM2O1xufVxuXG4jY29weXJpZ2h0IHtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NvY2lhbC1tZWRpYSB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3NvY2lhbC1tZWRpYSBpbWcge1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0MnB4O1xufVxuXG4jc29jaWFsLW1lZGlhIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.scss":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\nbody {\n  background: #c6c6c6;\n  margin-top: 100px;\n}\n.main {\n  max-width: 980px;\n  margin: auto;\n}\nh1 {\n  text-align: center;\n  font-family: Lulo;\n  font-size: 36px;\n  padding: 5px 0;\n  margin: auto;\n}\nngx-gallery ::ng-deep .ngx-gallery-arrow {\n  color: #afafaf;\n}\nngx-gallery ::ng-deep .ngx-gallery-arrow-wrapper {\n  z-index: 2;\n}\nngx-gallery {\n  margin-bottom: 20px;\n}\nngx-gallery ::ng-deep .ngx-gallery-image.ngx-gallery-active {\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtR0FBQTtBQUVSO0VBQVksbUJBQUE7RUFDUiwwRUFBQTtFQUNBLGllQUFBO0FDQ0o7QURNQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9BO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNMSjtBRFFBO0VBQ0ksY0FBQTtBQ0xKO0FEUUE7RUFDSSxVQUFBO0FDTEo7QURRQTtFQUNJLG1CQUFBO0FDTEo7QURRQTtFQUNJLFVBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcclxuXHJcbkBmb250LWZhY2Uge2ZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcclxuICAgIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XHJcbiAgICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIG1heC13aWR0aDogOTgwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuICBcclxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1hcnJvdyB7XHJcbiAgICBjb2xvcjogI2FmYWZhZjtcclxufVxyXG5cclxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1hcnJvdy13cmFwcGVyIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbm5neC1nYWxsZXJ5IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbm5neC1nYWxsZXJ5IDo6bmctZGVlcCAubmd4LWdhbGxlcnktaW1hZ2Uubmd4LWdhbGxlcnktYWN0aXZlIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG5ib2R5IHtcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIC5uZ3gtZ2FsbGVyeS1hcnJvdyB7XG4gIGNvbG9yOiAjYWZhZmFmO1xufVxuXG5uZ3gtZ2FsbGVyeSA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIge1xuICB6LWluZGV4OiAyO1xufVxuXG5uZ3gtZ2FsbGVyeSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbm5neC1nYWxsZXJ5IDo6bmctZGVlcCAubmd4LWdhbGxlcnktaW1hZ2Uubmd4LWdhbGxlcnktYWN0aXZlIHtcbiAgei1pbmRleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                "previewFullscreen": true,
                "previewKeyboardNavigation": true
            },
            {
                width: '100%',
                height: '600px',
                thumbnailsColumns: 5,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }
        ];
        this.galleryImages = [{
                small: '../../assets/new-images/os-front.jpg',
                medium: '../../assets/new-images/os-front.jpg',
                big: '../../assets/new-images/os-front.jpg'
            },
            {
                small: '../../assets/new-images/os-front1.jpg',
                medium: '../../assets/new-images/os-front1.jpg',
                big: '../../assets/new-images/os-front1.jpg'
            },
            {
                small: '../../assets/new-images/os-front4.jpg',
                medium: '../../assets/new-images/os-front4.jpg',
                big: '../../assets/new-images/os-front4.jpg'
            },
            {
                small: '../../assets/new-images/os-front-angle.jpg',
                medium: '../../assets/new-images/os-front-angle.jpg',
                big: '../../assets/new-images/os-front-angle.jpg'
            },
            {
                small: '../../assets/new-images/swing1.jpg',
                medium: '../../assets/new-images/swing1.jpg',
                big: '../../assets/new-images/swing1.jpg'
            },
            {
                small: '../../assets/new-images/parking-lot.jpg',
                medium: '../../assets/new-images/parking-lot.jpg',
                big: '../../assets/new-images/parking-lot.jpg'
            },
            {
                small: '../../assets/new-images/parking-lot1.jpg',
                medium: '../../assets/new-images/parking-lot1.jpg',
                big: '../../assets/new-images/parking-lot1.jpg'
            },
            {
                small: '../../assets/new-images/parking-lot2.jpg',
                medium: '../../assets/new-images/parking-lot2.jpg',
                big: '../../assets/new-images/parking-lot2.jpg'
            },
            {
                small: '../../assets/new-images/parking-lot3.jpg',
                medium: '../../assets/new-images/parking-lot3.jpg',
                big: '../../assets/new-images/parking-lot3.jpg'
            },
            {
                small: '../../assets/new-images/mangerbuilding.jpg',
                medium: '../../assets/new-images/mangerbuilding.jpg',
                big: '../../assets/new-images/mangerbuilding.jpg'
            },
            {
                small: '../../assets/new-images/backbuilding.jpg',
                medium: '../../assets/new-images/backbuilding.jpg',
                big: '../../assets/new-images/backbuilding.jpg'
            },
            {
                small: '../../assets/new-images/basketball.jpg',
                medium: '../../assets/new-images/basketball.jpg',
                big: '../../assets/new-images/basketball.jpg'
            },
            {
                small: '../../assets/new-images/bikes.jpg',
                medium: '../../assets/new-images/bikes.jpg',
                big: '../../assets/new-images/bikes.jpg'
            },
            {
                small: '../../assets/new-images/bikes1.jpg',
                medium: '../../assets/new-images/bikes1.jpg',
                big: '../../assets/new-images/bikes1.jpg'
            },
            {
                small: '../../assets/new-images/hammick1.jpg',
                medium: '../../assets/new-images/hammick1.jpg',
                big: '../../assets/new-images/hammick1.jpg'
            },
            {
                small: '../../assets/new-images/hammick2.jpg',
                medium: '../../assets/new-images/hammick2.jpg',
                big: '../../assets/new-images/hammick2.jpg'
            },
            {
                small: '../../assets/new-images/grass.jpg',
                medium: '../../assets/new-images/grass.jpg',
                big: '../../assets/new-images/grass.jpg'
            },
            {
                small: '../../assets/new-images/picnic1.jpg',
                medium: '../../assets/new-images/picnic1.jpg',
                big: '../../assets/new-images/picnic1.jpg'
            },
            {
                small: '../../assets/new-images/firepit.jpg',
                medium: '../../assets/new-images/firepit.jpg',
                big: '../../assets/new-images/firepit.jpg'
            },
            {
                small: '../../assets/new-images/firepit1.jpg',
                medium: '../../assets/new-images/firepit1.jpg',
                big: '../../assets/new-images/firepit1.jpg'
            },
            {
                small: '../../assets/new-images/bbq.jpg',
                medium: '../../assets/new-images/bbq.jpg',
                big: '../../assets/new-images/bbq.jpg'
            },
            {
                small: '../../assets/new-images/bbq1.jpg',
                medium: '../../assets/new-images/bbq1.jpg',
                big: '../../assets/new-images/bbq1.jpg'
            },
            {
                small: '../../assets/new-images/club.jpg',
                medium: '../../assets/new-images/club.jpg',
                big: '../../assets/new-images/club.jpg'
            },
            {
                small: '../../assets/new-images/club5.jpg',
                medium: '../../assets/new-images/club5.jpg',
                big: '../../assets/new-images/club5.jpg'
            },
            {
                small: '../../assets/new-images/club4.jpg',
                medium: '../../assets/new-images/club4.jpg',
                big: '../../assets/new-images/club4.jpg'
            },
            {
                small: '../../assets/new-images/club1.jpg',
                medium: '../../assets/new-images/club1.jpg',
                big: '../../assets/new-images/club1.jpg'
            },
            {
                small: '../../assets/new-images/club2.jpg',
                medium: '../../assets/new-images/club2.jpg',
                big: '../../assets/new-images/club2.jpg'
            },
            {
                small: '../../assets/new-images/club3.jpg',
                medium: '../../assets/new-images/club3.jpg',
                big: '../../assets/new-images/club3.jpg'
            },
            {
                small: '../../assets/new-images/kitchen-us.jpg',
                medium: '../../assets/new-images/kitchen-us.jpg',
                big: '../../assets/new-images/kitchen-us.jpg'
            },
            {
                small: '../../assets/new-images/studyroom.jpg',
                medium: '../../assets/new-images/studyroom.jpg',
                big: '../../assets/new-images/studyroom.jpg'
            },
            {
                small: '../../assets/new-images/studyroom1.jpg',
                medium: '../../assets/new-images/studyroom1.jpg',
                big: '../../assets/new-images/studyroom1.jpg'
            },
            {
                small: '../../assets/new-images/studyroom2.jpg',
                medium: '../../assets/new-images/studyroom2.jpg',
                big: '../../assets/new-images/studyroom2.jpg'
            },
            {
                small: '../../assets/new-images/studyroom4.jpg',
                medium: '../../assets/new-images/studyroom4.jpg',
                big: '../../assets/new-images/studyroom4.jpg'
            },
            {
                small: '../../assets/new-images/studyroom5.jpg',
                medium: '../../assets/new-images/studyroom5.jpg',
                big: '../../assets/new-images/studyroom5.jpg'
            },
            {
                small: '../../assets/new-images/games2.jpg',
                medium: '../../assets/new-images/games2.jpg',
                big: '../../assets/new-images/games2.jpg'
            },
            {
                small: '../../assets/new-images/games.jpg',
                medium: '../../assets/new-images/games.jpg',
                big: '../../assets/new-images/games.jpg'
            },
            {
                small: '../../assets/new-images/games1.jpg',
                medium: '../../assets/new-images/games1.jpg',
                big: '../../assets/new-images/games1.jpg'
            },
            {
                small: '../../assets/new-images/games1.jpg',
                medium: '../../assets/new-images/games1.jpg',
                big: '../../assets/new-images/games1.jpg'
            },
            {
                small: '../../assets/new-images/kitchen-ds.jpg',
                medium: '../../assets/new-images/kitchen-ds.jpg',
                big: '../../assets/new-images/kitchen-ds.jpg'
            },
            {
                small: '../../assets/new-images/pool.jpg',
                medium: '../../assets/new-images/pool.jpg',
                big: '../../assets/new-images/pool.jpg'
            },
            {
                small: '../../assets/new-images/mail.jpg',
                medium: '../../assets/new-images/mail.jpg',
                big: '../../assets/new-images/mail.jpg'
            },
            {
                small: '../../assets/new-images/theater1.jpg',
                medium: '../../assets/new-images/theater1.jpg',
                big: '../../assets/new-images/theater1.jpg'
            },
            {
                small: '../../assets/new-images/theater2-du.jpg',
                medium: '../../assets/new-images/theater2-du.jpg',
                big: '../../assets/new-images/theater2-du.jpg'
            },
            {
                small: '../../assets/new-images/theater2.jpg',
                medium: '../../assets/new-images/theater2.jpg',
                big: '../../assets/new-images/theater2.jpg'
            },
            {
                small: '../../assets/new-images/piano-room.jpg',
                medium: '../../assets/new-images/piano-room.jpg',
                big: '../../assets/new-images/piano-room.jpg'
            },
            {
                small: '../../assets/new-images/piano.jpg',
                medium: '../../assets/new-images/piano.jpg',
                big: '../../assets/new-images/piano.jpg'
            },
            {
                small: '../../assets/new-images/gym-boys-ds.jpg',
                medium: '../../assets/new-images/gym-boys-ds.jpg',
                big: '../../assets/new-images/gym-boys-ds.jpg'
            },
            {
                small: '../../assets/new-images/gym-boys-ds1.jpg',
                medium: '../../assets/new-images/gym-boys-ds1.jpg',
                big: '../../assets/new-images/gym-boys-ds1.jpg'
            },
            {
                small: '../../assets/new-images/gym-boys-ds2.jpg',
                medium: '../../assets/new-images/gym-boys-ds2.jpg',
                big: '../../assets/new-images/gym-boys-ds2.jpg'
            },
            {
                small: '../../assets/new-images/gym-boys-us.jpg',
                medium: '../../assets/new-images/gym-boys-us.jpg',
                big: '../../assets/new-images/gym-boys-us.jpg'
            },
            {
                small: '../../assets/new-images/gym-boys-us1.jpg',
                medium: '../../assets/new-images/gym-boys-us1.jpg',
                big: '../../assets/new-images/gym-boys-us1.jpg'
            },
            {
                small: '../../assets/new-images/gym-girls.jpg',
                medium: '../../assets/new-images/gym-girls.jpg',
                big: '../../assets/new-images/gym-girls.jpg'
            },
            {
                small: '../../assets/new-images/gym-girls1.jpg',
                medium: '../../assets/new-images/gym-girls1.jpg',
                big: '../../assets/new-images/gym-girls1.jpg'
            },
            {
                small: '../../assets/new-images/gym-girls2.jpg',
                medium: '../../assets/new-images/gym-girls2.jpg',
                big: '../../assets/new-images/gym-girls2.jpg'
            },
            {
                small: '../../assets/new-images/gym-girls3.jpg',
                medium: '../../assets/new-images/gym-girls3.jpg',
                big: '../../assets/new-images/gym-girls3.jpg'
            },
            {
                small: '../../assets/new-images/floorplan.jpg',
                medium: '../../assets/new-images/floorplan.jpg',
                big: '../../assets/new-images/floorplan.jpg'
            },
            {
                small: '../../assets/new-images/floorplan1.jpg',
                medium: '../../assets/new-images/floorplan1.jpg',
                big: '../../assets/new-images/floorplan1.jpg'
            },
            {
                small: '../../assets/new-images/entry.jpg',
                medium: '../../assets/new-images/entry.jpg',
                big: '../../assets/new-images/entry.jpg'
            },
            {
                small: '../../assets/new-images/kitchen.jpg',
                medium: '../../assets/new-images/kitchen.jpg',
                big: '../../assets/new-images/kitchen.jpg'
            },
            {
                small: '../../assets/new-images/kitchen2.jpg',
                medium: '../../assets/new-images/kitchen2.jpg',
                big: '../../assets/new-images/kitchen2.jpg'
            },
            {
                small: '../../assets/new-images/kitchen4.jpg',
                medium: '../../assets/new-images/kitchen4.jpg',
                big: '../../assets/new-images/kitchen4.jpg'
            },
            {
                small: '../../assets/new-images/kitchen6.jpg',
                medium: '../../assets/new-images/kitchen6.jpg',
                big: '../../assets/new-images/kitchen6.jpg'
            },
            {
                small: '../../assets/new-images/kitchen7.jpg',
                medium: '../../assets/new-images/kitchen7.jpg',
                big: '../../assets/new-images/kitchen7.jpg'
            },
            {
                small: '../../assets/new-images/kitchen3.jpg',
                medium: '../../assets/new-images/kitchen3.jpg',
                big: '../../assets/new-images/kitchen3.jpg'
            },
            {
                small: '../../assets/new-images/kitchen-living.jpg',
                medium: '../../assets/new-images/kitchen-living.jpg',
                big: '../../assets/new-images/kitchen-living.jpg'
            },
            {
                small: '../../assets/new-images/livingroom.jpg',
                medium: '../../assets/new-images/livingroom.jpg',
                big: '../../assets/new-images/livingroom.jpg'
            },
            {
                small: '../../assets/new-images/livingroom1.jpg',
                medium: '../../assets/new-images/livingroom1.jpg',
                big: '../../assets/new-images/livingroom1.jpg'
            },
            {
                small: '../../assets/new-images/lr-closet1.jpg',
                medium: '../../assets/new-images/lr-closet1.jpg',
                big: '../../assets/new-images/lr-closet1.jpg'
            },
            {
                small: '../../assets/new-images/lr-closet.jpg',
                medium: '../../assets/new-images/lr-closet.jpg',
                big: '../../assets/new-images/lr-closet.jpg'
            },
            {
                small: '../../assets/new-images/hall-closet.jpg',
                medium: '../../assets/new-images/hall-closet.jpg',
                big: '../../assets/new-images/hall-closet.jpg'
            },
            {
                small: '../../assets/new-images/hallway.jpg',
                medium: '../../assets/new-images/hallway.jpg',
                big: '../../assets/new-images/hallway.jpg'
            },
            {
                small: '../../assets/new-images/bedroom-girls.jpg',
                medium: '../../assets/new-images/bedroom-girls.jpg',
                big: '../../assets/new-images/bedroom-girls.jpg'
            },
            {
                small: '../../assets/new-images/bed-girls1.jpg',
                medium: '../../assets/new-images/bed-girls1.jpg',
                big: '../../assets/new-images/bed-girls1.jpg'
            },
            {
                small: '../../assets/new-images/bed-girls.jpg',
                medium: '../../assets/new-images/bed-girls.jpg',
                big: '../../assets/new-images/bed-girls.jpg'
            },
            {
                small: '../../assets/new-images/bed-closet1.jpg',
                medium: '../../assets/new-images/bed-closet1.jpg',
                big: '../../assets/new-images/bed-closet1.jpg'
            },
            {
                small: '../../assets/new-images/bed-boys.jpg',
                medium: '../../assets/new-images/bed-boys.jpg',
                big: '../../assets/new-images/bed-boys.jpg'
            },
            {
                small: '../../assets/new-images/bed-boys1.jpg',
                medium: '../../assets/new-images/bed-boys1.jpg',
                big: '../../assets/new-images/bed-boys1.jpg'
            },
            {
                small: '../../assets/new-images/bed-boys2.jpg',
                medium: '../../assets/new-images/bed-boys2.jpg',
                big: '../../assets/new-images/bed-boys2.jpg'
            },
            {
                small: '../../assets/new-images/bed-closet.jpg',
                medium: '../../assets/new-images/bed-closet.jpg',
                big: '../../assets/new-images/bed-closet.jpg'
            },
            {
                small: '../../assets/new-images/bathroom1.jpg',
                medium: '../../assets/new-images/bathroom1.jpg',
                big: '../../assets/new-images/bathroom1.jpg'
            },
            {
                small: '../../assets/new-images/bathroom2.jpg',
                medium: '../../assets/new-images/bathroom2.jpg',
                big: '../../assets/new-images/bathroom2.jpg'
            },
            {
                small: '../../assets/new-images/bathroom3.jpg',
                medium: '../../assets/new-images/bathroom3.jpg',
                big: '../../assets/new-images/bathroom3.jpg'
            },
            {
                small: '../../assets/new-images/w-d.jpg',
                medium: '../../assets/new-images/w-d.jpg',
                big: '../../assets/new-images/w-d.jpg'
            },
            {
                small: '../../assets/images/nh tenants.jpg',
                medium: '../../assets/images/nh tenants.jpg',
                big: '../../assets/images/nh tenants.jpg'
            },
            {
                small: '../../assets/images/nh tenant-1.jpg',
                medium: '../../assets/images/nh tenant-1.jpg',
                big: '../../assets/images/nh tenant-1.jpg'
            },
            {
                small: '../../assets/images/nh tenant-2.jpg',
                medium: '../../assets/images/nh tenant-2.jpg',
                big: '../../assets/images/nh tenant-2.jpg'
            },
            {
                small: '../../assets/images/nh-boys 2.jpg',
                medium: '../../assets/images/nh-boys 2.jpg',
                big: '../../assets/images/nh-boys 2.jpg'
            },
            {
                small: '../../assets/images/nh tenant-3.jpg',
                medium: '../../assets/images/nh tenant-3.jpg',
                big: '../../assets/images/nh tenant-3.jpg'
            },
            {
                small: '../../assets/images/nh-jump rope.jpg',
                medium: '../../assets/images/nh-jump rope.jpg',
                big: '../../assets/images/nh-jump rope.jpg'
            },
            {
                small: '../../assets/images/nh-light.jpg',
                medium: '../../assets/images/nh-light.jpg',
                big: '../../assets/images/nh-light.jpg'
            },
            {
                small: '../../assets/images/nh tenant-4.jpg',
                medium: '../../assets/images/nh tenant-4.jpg',
                big: '../../assets/images/nh tenant-4.jpg'
            },
            {
                small: '../../assets/images/nh-boys.jpg',
                medium: '../../assets/images/nh-boys.jpg',
                big: '../../assets/images/nh-boys.jpg'
            },
            {
                small: '../../assets/images/nh-tenant fall.jpg',
                medium: '../../assets/images/nh-tenant fall.jpg',
                big: '../../assets/images/nh-tenant fall.jpg'
            },
            {
                small: '../../assets/images/nh-swing.jpg',
                medium: '../../assets/images/nh-swing.jpg',
                big: '../../assets/images/nh-swing.jpg'
            },
            {
                small: '../../assets/images/nh-hammick.jpg',
                medium: '../../assets/images/nh-hammick.jpg',
                big: '../../assets/images/nh-hammick.jpg'
            },
            {
                small: '../../assets/images/nh-girls.jpg',
                medium: '../../assets/images/nh-girls.jpg',
                big: '../../assets/images/nh-girls.jpg'
            },
            {
                small: '../../assets/images/nh-tenants.jpg',
                medium: '../../assets/images/nh-tenants.jpg',
                big: '../../assets/images/nh-tenants.jpg'
            },
            {
                small: '../../assets/images/nh-twister.jpg',
                medium: '../../assets/images/nh-twister.jpg',
                big: '../../assets/images/nh-twister.jpg'
            },
            {
                small: '../../assets/images/nh-tenants-1.jpg',
                medium: '../../assets/images/nh-tenants-1.jpg',
                big: '../../assets/images/nh-tenants-1.jpg'
            },
            {
                small: '../../assets/images/Nauvoo+House003-croped.jpg',
                medium: '../../assets/images/Nauvoo+House003-croped.jpg',
                big: '../../assets/images/Nauvoo+House003-croped.jpg'
            }
        ];
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/gallery/gallery.component.scss")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\nbody {\n  -webkit-transition: background-color 0.5s ease-in-out;\n  transition: background-color 0.5s ease-in-out;\n}\n.head-main {\n  background-color: #78c445;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 10;\n}\n.main {\n  display: -webkit-box;\n  display: flex;\n  max-width: 980px;\n  margin: auto;\n  max-height: 100px;\n}\n#img-logo {\n  margin: 5px;\n  background-image: url('NH-house.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 113px;\n  height: 92px;\n  position: relative;\n}\na {\n  text-decoration: none;\n}\n#menu-toggle {\n  font-size: 3em;\n  color: white;\n  text-decoration: none;\n  position: absolute;\n  top: 30%;\n  left: 30%;\n  cursor: pointer;\n}\n.title {\n  text-align: center;\n  margin: auto;\n  font-family: Lulo;\n  font-size: 36px;\n  color: white;\n  -webkit-transition: color 0.3s ease-in-out;\n  transition: color 0.3s ease-in-out;\n}\n.title:hover {\n  color: rgba(255, 255, 255, 0.8);\n}\n#resident {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.btn-primary {\n  display: block;\n  padding: 4.5%;\n  width: 145px;\n  height: 40px;\n  text-align: center;\n  background-color: white;\n  font-size: 18px;\n  font-family: Helvetica, sans-serif;\n  border-radius: 40px;\n  -webkit-transition: background-color 0.5s ease-in-out;\n  transition: background-color 0.5s ease-in-out;\n}\n.btn-primary:hover {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n#log-in {\n  background-repeat: no-repeat;\n  margin: 5px;\n  width: 28px;\n}\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #78c445;\n  overflow: hidden;\n  padding-top: 70px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  scrollbar-width: 0;\n}\n.fade > * {\n  opacity: 0;\n}\n.sidenav a {\n  padding: 8px 8px 10px 8px;\n  text-decoration: none;\n  font-size: 24px;\n  color: #000;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  background-color: transparent;\n}\n.sidenav a:hover {\n  color: #000;\n  text-align: center;\n  font-size: 24px;\n  background-color: rgba(255, 255, 255, 0.4);\n  border-radius: 40px;\n}\n.sidenav a:active {\n  background-color: #4D8229;\n  color: #fff;\n}\n#closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 50px;\n  margin-left: 50px;\n  cursor: pointer;\n}\n#closebtn:hover {\n  background-color: transparent;\n}\n#nav-size {\n  width: 85%;\n  margin: auto;\n}\n#social-media {\n  max-width: 100px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#social-media img {\n  width: 42px;\n  height: 42px;\n}\n#social-media a:hover {\n  background-color: transparent;\n}\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n#pointer {\n  width: 200px;\n  height: 60px;\n  position: relative;\n  background: #696969;\n  color: #fff;\n  font-family: Helvetica, sans-serif;\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  padding: 4.5%;\n  margin: auto;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#pointer:before {\n  content: \"\";\n  position: absolute;\n  right: -30px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 30px solid #696969;\n  border-top: 30px solid transparent;\n  border-bottom: 30px solid transparent;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#pointer:hover {\n  background: #4D8229;\n}\n#pointer:hover::before {\n  border-left: 30px solid #4D8229;\n}\n#point-link:hover {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxxREFBQTtFQUFBLDZDQUFBO0FDTEY7QURRQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxxQkFBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQUEsa0NBQUE7QUNMRjtBRFFBO0VBQ0UsK0JBQUE7QUNMRjtBRFFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtBQ0xGO0FEUUE7RUFDRSwwQ0FBQTtBQ0xGO0FEUUE7RUFFRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTkY7QURVQTtFQUNFLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEVUE7RUFDQyxVQUFBO0FDUEQ7QURVQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ1BGO0FEVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNQRjtBRFVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNQRjtBRFVBO0VBQ0UsNkJBQUE7QUNQRjtBRFVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNQRjtBRFVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFDRSw2QkFBQTtBQ1BGO0FEVUE7RUFDRTtJQUNFLGlCQUFBO0VDUEY7O0VEVUE7SUFDRSxlQUFBO0VDUEY7QUFDRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7QUNURjtBRFlBO0VBQ0UsbUJBQUE7QUNURjtBRFlBO0VBQ0UsK0JBQUE7QUNURjtBRFlBO0VBQ0UsNkJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmhlYWQtbWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4YzQ0NTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuI2ltZy1sb2dvIHtcclxuICBtYXJnaW46IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9OSC1ob3VzZS5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIHdpZHRoOiAxMTNweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNtZW51LXRvZ2dsZSB7XHJcbiAgZm9udC1zaXplOiAzZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzMCU7XHJcbiAgbGVmdDogMzAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udGl0bGU6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbiNyZXNpZGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDQuNSU7XHJcbiAgd2lkdGg6IDE0NXB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC41cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbiNsb2ctaW4ge1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3VzZXItY2lyY2xlLXNvbGlkLnN2Zyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLy9TaWRlIE5hdlxyXG4uc2lkZW5hdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGM0NDU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nLXRvcDogNzBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIHNjcm9sbGJhci13aWR0aDogMDtcclxufVxyXG5cclxuLmZhZGUgPiAqIHtcclxuIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGEge1xyXG4gIHBhZGRpbmc6IDhweCA4cHggMTBweCA4cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEQ4MjI5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jY2xvc2VidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2Nsb3NlYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI25hdi1zaXplIHtcclxuICB3aWR0aDogODUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3NvY2lhbC1tZWRpYSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNzb2NpYWwtbWVkaWEgaW1nIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbn1cclxuXHJcbiNzb2NpYWwtbWVkaWEgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gIC5zaWRlbmF2IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2NzcyBzaGFwZSBmb3Igc2lnbiBub3cgYnV0dG9uXHJcbiNwb2ludGVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0LjUlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4jcG9pbnRlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMzBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICM2OTY5Njk7XHJcbiAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNwb2ludGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNEQ4MjI5O1xyXG59XHJcblxyXG4jcG9pbnRlcjpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjNEQ4MjI5O1xyXG59XHJcblxyXG4jcG9pbnQtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuYm9keSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmhlYWQtbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OGM0NDU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuI2ltZy1sb2dvIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL05ILWhvdXNlLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgd2lkdGg6IDExM3B4O1xuICBoZWlnaHQ6IDkycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI21lbnUtdG9nZ2xlIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiAzMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnRpdGxlOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuI3Jlc2lkZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDQuNSU7XG4gIHdpZHRoOiAxNDVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xufVxuXG4jbG9nLWluIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzhjNDQ1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgc2Nyb2xsYmFyLXdpZHRoOiAwO1xufVxuXG4uZmFkZSA+ICoge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCAxMHB4IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5zaWRlbmF2IGE6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREODIyOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbiNjbG9zZWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMjVweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jY2xvc2VidG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI25hdi1zaXplIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4jc29jaWFsLW1lZGlhIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNzb2NpYWwtbWVkaWEgaW1nIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbn1cblxuI3NvY2lhbC1tZWRpYSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cblxuICAuc2lkZW5hdiBhIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cbiNwb2ludGVyIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogIzY5Njk2OTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNC41JTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jcG9pbnRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMzBweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjNjk2OTY5O1xuICBib3JkZXItdG9wOiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4jcG9pbnRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0RDgyMjk7XG59XG5cbiNwb2ludGVyOmhvdmVyOjpiZWZvcmUge1xuICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjNEQ4MjI5O1xufVxuXG4jcG9pbnQtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openNav = function () {
        document.getElementById("nav").style.width = "340px";
        document.getElementById("nav").classList.remove("fade");
        document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
        document.getElementById("nav").style.zIndex = "100";
    };
    HeaderComponent.prototype.closeNav = function () {
        document.getElementById("nav").classList.add("fade");
        document.getElementById("nav").style.width = "0";
        document.body.style.backgroundColor = "rgba(0,0,0,0)";
        // document.body.addEventListener('click', this.closeNav);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.home-main {\n  margin-top: 100px;\n  background: #c6c6c6;\n}\n.home-accent {\n  background: #fff;\n}\na {\n  text-decoration: none;\n}\n#pic-background {\n  background-image: url('os-front-angle.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  height: 560px;\n  width: 100%;\n}\n#semi-circle {\n  height: 100px;\n  width: 200px;\n  border-radius: 0 0 100px 100px;\n  background: #404040;\n  color: #fff;\n  text-align: center;\n  font-size: 24px;\n  margin: auto;\n  font-weight: bold;\n  padding-top: 5px;\n  -webkit-transition: background-color 0.3s ease-in-out;\n  transition: background-color 0.3s ease-in-out;\n}\n#semi-circle:hover {\n  background: #4D8229;\n  cursor: pointer;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 36px;\n  color: #fff;\n  text-align: center;\n  background: #78C445;\n  width: 980px;\n  margin: auto;\n  padding: 5px 0;\n  letter-spacing: -3px;\n}\n#welcome {\n  max-width: 980px;\n  margin: auto;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n#gallery {\n  margin-top: 20px;\n}\n#text {\n  width: 340px;\n  font-size: 18px;\n  font-family: Helvetica, sans-serif;\n}\n#sub-head {\n  font-size: 22px;\n  margin: 15px 0;\n}\n#culture {\n  max-width: 980px;\n  margin: auto;\n  margin-top: -50px;\n}\n#circle-flex {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n.circle {\n  width: 230px;\n  height: 230px;\n  border-radius: 50%;\n  font-size: 22px;\n  font-family: Lulo;\n  color: #fff;\n  text-align: center;\n  background: #78C445;\n  padding: 0 12%;\n  overflow: hidden;\n  margin: 30px 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.circle:hover {\n  background-color: #4D8229;\n}\n.circle .first {\n  line-height: 180px;\n}\n.circle .second {\n  display: none;\n}\n.circle:hover .first {\n  display: none;\n}\n.circle:hover .second {\n  display: inline-block;\n  font-size: 13px;\n  line-height: 18px;\n}\n#social {\n  max-width: 980px;\n  margin: auto;\n}\n#social-media {\n  max-width: 100px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n#social-media img {\n  width: 42px;\n  height: 42px;\n  margin-top: 20px;\n}\n#social-media a:hover {\n  background-color: transparent;\n}\n.address {\n  background: #c6c6c6;\n}\nagm-map {\n  width: 100%;\n  height: 400px;\n}\n#big-text {\n  font-family: Lulo;\n  font-size: 20px;\n}\n.address p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n}\n#grid {\n  margin-top: 10px;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n.grid-img {\n  margin: 5px;\n}\n.reviews {\n  max-width: 980px;\n  margin: auto;\n}\n.reviews p {\n  text-align: center;\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n}\n#link-review {\n  width: 300px;\n}\n#love {\n  font-family: Lulo;\n  font-size: 20px;\n  color: #78C445;\n  font-weight: bolder;\n  margin-top: 0;\n}\n#small-text {\n  font-size: 13px;\n}\n#review-container {\n  background-image: url('review.JPG');\n  width: 630px;\n  height: 305px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n#s1 {\n  background-image: url('nh-twister.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s2 {\n  background-image: url('nhtenant-2.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s3 {\n  background-image: url('nhtenant-3.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s4 {\n  background-image: url('nhtenant-4.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s5 {\n  background-image: url('nhtenants.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s6 {\n  background-image: url('nh-boys.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s7 {\n  background-image: url('nh-jump-rope.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s8 {\n  background-image: url('nh-swing.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n#s9 {\n  background-image: url('nh-tenants.jpg');\n  width: 162px;\n  height: 162px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\nngx-gallery ::ng-deep .ngx-gallery-image.ngx-gallery-active {\n  z-index: 1;\n}\nngx-gallery ::ng-deep .ngx-gallery-arrow-wrapper {\n  z-index: 2;\n}\nngx-gallery ::ng-deep ngx-gallery-thumbnails {\n  display: none;\n  height: 0;\n}\n#pointer {\n  width: 230px;\n  height: 40px;\n  position: relative;\n  background: #78C445;\n  color: #fff;\n  font-family: Helvetica, sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  padding: 1.5%;\n  margin: auto;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#pointer:before {\n  content: \"\";\n  position: absolute;\n  right: -20px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 20px solid #78C445;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#pointer:hover {\n  background: #4D8229;\n}\n#pointer:hover::before {\n  border-left: 20px solid #4D8229;\n}\n#point-link:hover, #address-link:hover {\n  background-color: transparent;\n}\n#directions {\n  width: 230px;\n  height: 40px;\n  position: relative;\n  background: #696969;\n  color: #fff;\n  font-family: Helvetica, sans-serif;\n  font-size: 25px;\n  font-weight: bold;\n  text-align: center;\n  padding: 0.2%;\n  margin: auto;\n  margin-bottom: 10px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#directions:before {\n  content: \"\";\n  position: absolute;\n  right: -20px;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-left: 20px solid #696969;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#directions:hover {\n  background: #4D8229;\n}\n#directions:hover::before {\n  border-left: 20px solid #4D8229;\n}\n#button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n#myBtn {\n  width: 65px;\n  height: 65px;\n  font-size: 15px;\n  background-color: #B6DF9B;\n  cursor: pointer;\n  border-radius: 50px;\n  font-family: Helvetica, sans-serif;\n  font-weight: 100;\n  outline: none;\n  border: none;\n  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);\n  margin: 10px 0 15px 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n#myBtn:hover {\n  background-color: #4D8229;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtR0FBQTtBQUVSO0VBQ0UsbUJBQUE7RUFDQSwwRUFBQTtFQUNBLGllQUFBO0FDQUY7QURPQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UscUJBQUE7QUNMRjtBRFFBO0VBQ0UsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDTEY7QURRQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0xGO0FEUUE7RUFDSSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FDTEo7QURRQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDTEo7QURRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0xGO0FEUUE7RUFDRSx5QkFBQTtBQ0xGO0FEUUE7RUFDRSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxhQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7QUNMRjtBRFFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNMRjtBRFFBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSw2QkFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0xGO0FEUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FDTEY7QURTQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTkY7QURTQTtFQUNFLFdBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDTkY7QURTQTtFQUNFLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDTkY7QURTQTtFQUNFLFlBQUE7QUNORjtBRFNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ05GO0FEU0E7RUFDRSxlQUFBO0FDTkY7QURTQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDTkY7QURVQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNQRjtBRFVBO0VBQ0UsdUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1BGO0FEVUE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDUEY7QURVQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNQRjtBRFVBO0VBQ0Usc0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1BGO0FEVUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDUEY7QURVQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNQRjtBRFVBO0VBQ0UscUNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1BGO0FEVUE7RUFDRSx1Q0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDUEY7QURZQTtFQUNJLFVBQUE7QUNUSjtBRFlBO0VBQ0ksVUFBQTtBQ1RKO0FEWUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQ1RGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1hGO0FEY0E7RUFDRSxtQkFBQTtBQ1hGO0FEY0E7RUFDRSwrQkFBQTtBQ1hGO0FEY0E7RUFDRSw2QkFBQTtBQ1hGO0FEY0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDWEY7QURjQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDWEY7QURjQTtFQUNFLG1CQUFBO0FDWEY7QURjQTtFQUNFLCtCQUFBO0FDWEY7QURlQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNaRjtBRGVBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtBQ1pBO0FEZUE7RUFDQSx5QkFBQTtBQ1pBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLmhvbWUtbWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcclxufVxyXG5cclxuLmhvbWUtYWNjZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNwaWMtYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9uZXctaW1hZ2VzL29zLWZyb250LWFuZ2xlLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNTYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNzZW1pLWNpcmNsZSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwMHB4IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0MDQwNDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3NlbWktY2lyY2xlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNEQ4MjI5O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtM3B4O1xyXG59XHJcblxyXG4jd2VsY29tZSB7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbiNnYWxsZXJ5IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiN0ZXh0IHtcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiNzdWItaGVhZCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuI2N1bHR1cmUge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IC01MHB4O1xyXG59XHJcblxyXG4jY2lyY2xlLWZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDIzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XHJcbiAgcGFkZGluZzogMCAxMiU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDMwcHggMDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNpcmNsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzREODIyOTtcclxufVxyXG5cclxuLmNpcmNsZSAuZmlyc3Qge1xyXG4gIGxpbmUtaGVpZ2h0OiAxODBweDtcclxufVxyXG5cclxuLmNpcmNsZSAuc2Vjb25kIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2lyY2xlOmhvdmVyIC5maXJzdCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmNpcmNsZTpob3ZlciAuc2Vjb25kIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4jc29jaWFsIHtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuI3NvY2lhbC1tZWRpYSB7XHJcbiAgbWF4LXdpZHRoOiAxMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNzb2NpYWwtbWVkaWEgaW1nIHtcclxuICB3aWR0aDogNDJweDtcclxuICBoZWlnaHQ6IDQycHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI3NvY2lhbC1tZWRpYSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmFkZHJlc3Mge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbn1cclxuXHJcbmFnbS1tYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiNiaWctdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYWRkcmVzcyBwe1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vL2dyaWQgaW1hZ2VzXHJcbiNncmlkIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmdyaWQtaW1nIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLnJldmlld3Mge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmV2aWV3cyBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbiNsaW5rLXJldmlldyB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4jbG92ZSB7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjNzhDNDQ1O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuI3NtYWxsLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuI3Jldmlldy1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3Jldmlldy5KUEcpO1xyXG4gIHdpZHRoOiA2MzBweDtcclxuICBoZWlnaHQ6IDMwNXB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4vL2dyaWQgaW1hZ2VzXHJcbiNzMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmgtdHdpc3Rlci5qcGcpO1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDE2MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzMiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtMi5qcGcpO1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDE2MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzMyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtMy5qcGcpO1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDE2MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzNCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtNC5qcGcpO1xyXG4gIHdpZHRoOiAxNjJweDtcclxuICBoZWlnaHQ6IDE2MnB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzNSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnRzLmpwZyk7XHJcbiAgd2lkdGg6IDE2MnB4O1xyXG4gIGhlaWdodDogMTYycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI3M2IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC1ib3lzLmpwZyk7XHJcbiAgd2lkdGg6IDE2MnB4O1xyXG4gIGhlaWdodDogMTYycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI3M3IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC1qdW1wLXJvcGUuanBnKTtcclxuICB3aWR0aDogMTYycHg7XHJcbiAgaGVpZ2h0OiAxNjJweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG4jczgge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL25oLXN3aW5nLmpwZyk7XHJcbiAgd2lkdGg6IDE2MnB4O1xyXG4gIGhlaWdodDogMTYycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuI3M5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC10ZW5hbnRzLmpwZyk7XHJcbiAgd2lkdGg6IDE2MnB4O1xyXG4gIGhlaWdodDogMTYycHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8vZ2FsbGVyeVxyXG5uZ3gtZ2FsbGVyeSA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWltYWdlLm5neC1nYWxsZXJ5LWFjdGl2ZSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5uZ3gtZ2FsbGVyeSA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWFycm93LXdyYXBwZXIge1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxubmd4LWdhbGxlcnkgOjpuZy1kZWVwIG5neC1nYWxsZXJ5LXRodW1ibmFpbHMge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5cclxuLy9yZXZpZXdzICYgZ2V0IGFkZHJlcyBidXR0b25cclxuI3BvaW50ZXIge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEuNSU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNwb2ludGVyOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC0yMHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzc4QzQ0NTtcclxuICBib3JkZXItdG9wOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuI3BvaW50ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM0RDgyMjk7XHJcbn1cclxuXHJcbiNwb2ludGVyOmhvdmVyOjpiZWZvcmUge1xyXG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM0RDgyMjk7XHJcbn1cclxuXHJcbiNwb2ludC1saW5rOmhvdmVyLCAjYWRkcmVzcy1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI2RpcmVjdGlvbnMge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6ICM2OTY5Njk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IC4yJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4jZGlyZWN0aW9uczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM2OTY5Njk7XHJcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNkaXJlY3Rpb25zOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNEQ4MjI5O1xyXG59XHJcblxyXG4jZGlyZWN0aW9uczpob3Zlcjo6YmVmb3JlIHtcclxuICBib3JkZXItbGVmdDogMjBweCBzb2xpZCAjNEQ4MjI5O1xyXG59XHJcblxyXG4vL3RvIHRvcCBidXR0b25cclxuI2J1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI215QnRuIHtcclxud2lkdGg6IDY1cHg7XHJcbmhlaWdodDogNjVweDtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjQjZERjlCO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbmZvbnQtd2VpZ2h0OiAxMDA7XHJcbm91dGxpbmU6IG5vbmU7XHJcbmJvcmRlcjogbm9uZTtcclxuYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5tYXJnaW46IDEwcHggMCAxNXB4IDA7XHJcbnRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbiNteUJ0bjpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM0RDgyMjk7XHJcbn0iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG4uaG9tZS1tYWluIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG59XG5cbi5ob21lLWFjY2VudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNwaWMtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvbmV3LWltYWdlcy9vcy1mcm9udC1hbmdsZS5qcGcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogNTYwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc2VtaS1jaXJjbGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMDBweCAxMDBweDtcbiAgYmFja2dyb3VuZDogIzQwNDA0MDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNzZW1pLWNpcmNsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0RDgyMjk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xuICB3aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogNXB4IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtM3B4O1xufVxuXG4jd2VsY29tZSB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4jZ2FsbGVyeSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiN0ZXh0IHtcbiAgd2lkdGg6IDM0MHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbiNzdWItaGVhZCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbiNjdWx0dXJlIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cblxuI2NpcmNsZS1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jaXJjbGUge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogMjMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogTHVsbztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcbiAgcGFkZGluZzogMCAxMiU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMzBweCAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNpcmNsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDgyMjk7XG59XG5cbi5jaXJjbGUgLmZpcnN0IHtcbiAgbGluZS1oZWlnaHQ6IDE4MHB4O1xufVxuXG4uY2lyY2xlIC5zZWNvbmQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2lyY2xlOmhvdmVyIC5maXJzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jaXJjbGU6aG92ZXIgLnNlY29uZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cblxuI3NvY2lhbCB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI3NvY2lhbC1tZWRpYSB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4jc29jaWFsLW1lZGlhIGltZyB7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbiNzb2NpYWwtbWVkaWEgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYWRkcmVzcyB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG59XG5cbmFnbS1tYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuI2JpZy10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFkZHJlc3MgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI2dyaWQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ncmlkLWltZyB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucmV2aWV3cyB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJldmlld3MgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jbGluay1yZXZpZXcge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbiNsb3ZlIHtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM3OEM0NDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbiNzbWFsbC10ZXh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4jcmV2aWV3LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3Jldmlldy5KUEcpO1xuICB3aWR0aDogNjMwcHg7XG4gIGhlaWdodDogMzA1cHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3MxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmgtdHdpc3Rlci5qcGcpO1xuICB3aWR0aDogMTYycHg7XG4gIGhlaWdodDogMTYycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3MyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtMi5qcGcpO1xuICB3aWR0aDogMTYycHg7XG4gIGhlaWdodDogMTYycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3MzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtMy5qcGcpO1xuICB3aWR0aDogMTYycHg7XG4gIGhlaWdodDogMTYycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3M0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnQtNC5qcGcpO1xuICB3aWR0aDogMTYycHg7XG4gIGhlaWdodDogMTYycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3M1IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvbmh0ZW5hbnRzLmpwZyk7XG4gIHdpZHRoOiAxNjJweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jczYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC1ib3lzLmpwZyk7XG4gIHdpZHRoOiAxNjJweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jczcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC1qdW1wLXJvcGUuanBnKTtcbiAgd2lkdGg6IDE2MnB4O1xuICBoZWlnaHQ6IDE2MnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbiNzOCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL25oLXN3aW5nLmpwZyk7XG4gIHdpZHRoOiAxNjJweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4jczkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9uaC10ZW5hbnRzLmpwZyk7XG4gIHdpZHRoOiAxNjJweDtcbiAgaGVpZ2h0OiAxNjJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5uZ3gtZ2FsbGVyeSA6Om5nLWRlZXAgLm5neC1nYWxsZXJ5LWltYWdlLm5neC1nYWxsZXJ5LWFjdGl2ZSB7XG4gIHotaW5kZXg6IDE7XG59XG5cbm5neC1nYWxsZXJ5IDo6bmctZGVlcCAubmd4LWdhbGxlcnktYXJyb3ctd3JhcHBlciB7XG4gIHotaW5kZXg6IDI7XG59XG5cbm5neC1nYWxsZXJ5IDo6bmctZGVlcCBuZ3gtZ2FsbGVyeS10aHVtYm5haWxzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4jcG9pbnRlciB7XG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNSU7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI3BvaW50ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwcHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzc4QzQ0NTtcbiAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuI3BvaW50ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNEQ4MjI5O1xufVxuXG4jcG9pbnRlcjpob3Zlcjo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzREODIyOTtcbn1cblxuI3BvaW50LWxpbms6aG92ZXIsICNhZGRyZXNzLWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuI2RpcmVjdGlvbnMge1xuICB3aWR0aDogMjMwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjNjk2OTY5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjIlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNkaXJlY3Rpb25zOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM2OTY5Njk7XG4gIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNkaXJlY3Rpb25zOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzREODIyOTtcbn1cblxuI2RpcmVjdGlvbnM6aG92ZXI6OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkICM0RDgyMjk7XG59XG5cbiNidXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI215QnRuIHtcbiAgd2lkdGg6IDY1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjZERjlCO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDEwcHggMCAxNXB4IDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbiNteUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDgyMjk7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Nauvoo House';
        this.lat = 43.814642;
        this.lng = -111.788742;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.galleryOptions = [{
                "thumbnails": false,
                "imageAutoPlay": true,
                "imageAutoPlayPauseOnHover": true,
                "previewAutoPlay": true,
                "previewAutoPlayPauseOnHover": true,
                "previewFullscreen": true,
                "previewKeyboardNavigation": true
            },
            {
                width: '540px',
                height: '470px',
                thumbnailsAutoHide: true,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_2__["NgxGalleryAnimation"].Slide
            }
        ];
        this.galleryImages = [{
                small: '',
                medium: '../../assets/new-images/os-front.jpg',
                big: '../../assets/new-images/os-front.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/kitchen.jpg',
                big: '../../assets/new-images/kitchen.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/livingroom.jpg',
                big: '../../assets/new-images/livingroom.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/bedroom-girls.jpg',
                big: '../../assets/new-images/bedroom-girls.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/bathroom1.jpg',
                big: '../../assets/new-images/bathroom1.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/gym-boys-us.jpg',
                big: '../../assets/new-images/gym-boys-us.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/studyroom4.jpg',
                big: '../../assets/new-images/studyroom4.jpg'
            },
            {
                small: '',
                medium: '../../assets/new-images/grass.jpg',
                big: '../../assets/new-images/grass.jpg'
            },
        ];
    };
    HomeComponent.prototype.topFunction = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/tiles/tiles.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/tiles/tiles.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  max-width: 980px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\na {\n  text-decoration: none;\n}\n\n.tile {\n  width: 200px;\n  height: 192px;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-top: 170px;\n  position: relative;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.tile:hover {\n  background: #E4E4E4;\n}\n\n.overlay {\n  height: 70px;\n  width: 200px;\n  font-size: 19px;\n  font-family: Helvetica, sans-serif;\n  background: #78C445;\n  color: white;\n  font-weight: bold;\n  letter-spacing: 2px;\n  padding: 10% 0 0 6%;\n  line-height: 40%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.overlay hr {\n  width: 48px;\n  border: solid 1.5px #fff;\n}\n\n#apt {\n  background-image: url('bed.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 71px;\n  margin: 13% 32%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.tile:hover #apt {\n  background-image: url('sofa.png');\n}\n\n#amen {\n  background-image: url('washing-machine.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 71px;\n  margin: 13% 32%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.tile:hover #amen {\n  background-image: url('theater.png');\n}\n\n#gallery {\n  background-image: url('two-polaroid-pictures.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 71px;\n  margin: 13% 32%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.tile:hover #gallery {\n  background-image: url('camera.png');\n}\n\n#contact {\n  background-image: url('smartphone-call.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 71px;\n  margin: 13% 32%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n\n.tile:hover #contact {\n  background-image: url('mail.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90aWxlcy9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXGhvbWVcXHRpbGVzXFx0aWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS90aWxlcy90aWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FER0E7RUFDRSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNBRjs7QURHQTtFQUNFLGlDQUFBO0FDQUY7O0FER0E7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNBRjs7QURHQTtFQUNFLG9DQUFBO0FDQUY7O0FER0E7RUFDRSxrREFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNBRjs7QURHQTtFQUNFLG1DQUFBO0FDQUY7O0FER0E7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNBRjs7QURHQTtFQUNFLGlDQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL3RpbGVzL3RpbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxOTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAxNzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50aWxlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRTRFNEU0O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiAjNzhDNDQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHBhZGRpbmc6IDEwJSAwIDAgNiU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5vdmVybGF5IGhyIHtcclxuICB3aWR0aDogNDhweDtcclxuICBib3JkZXI6IHNvbGlkIDEuNXB4ICNmZmY7XHJcbn1cclxuXHJcbi8vaWNvbnNcclxuI2FwdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvYmVkLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgaGVpZ2h0OiA3MXB4O1xyXG4gIG1hcmdpbjogMTMlIDMyJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpbGU6aG92ZXIgI2FwdCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc29mYS5wbmcpO1xyXG59XHJcblxyXG4jYW1lbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2FzaGluZy1tYWNoaW5lLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgaGVpZ2h0OiA3MXB4O1xyXG4gIG1hcmdpbjogMTMlIDMyJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnRpbGU6aG92ZXIgI2FtZW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZWF0ZXIucG5nKTtcclxufVxyXG5cclxuI2dhbGxlcnkge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3R3by1wb2xhcm9pZC1waWN0dXJlcy5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGhlaWdodDogNzFweDtcclxuICBtYXJnaW46IDEzJSAzMiU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50aWxlOmhvdmVyICNnYWxsZXJ5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9jYW1lcmEucG5nKTtcclxufVxyXG5cclxuI2NvbnRhY3Qge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NtYXJ0cGhvbmUtY2FsbC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGhlaWdodDogNzFweDtcclxuICBtYXJnaW46IDEzJSAzMiU7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi50aWxlOmhvdmVyICNjb250YWN0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9tYWlsLnBuZyk7XHJcbn1cclxuIiwiLm1haW4ge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRpbGUge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMTkycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLnRpbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRTRFNEU0O1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBmb250LXNpemU6IDE5cHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6ICM3OEM0NDU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHBhZGRpbmc6IDEwJSAwIDAgNiU7XG4gIGxpbmUtaGVpZ2h0OiA0MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xufVxuXG4ub3ZlcmxheSBociB7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXI6IHNvbGlkIDEuNXB4ICNmZmY7XG59XG5cbiNhcHQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9iZWQucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDcxcHg7XG4gIG1hcmdpbjogMTMlIDMyJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udGlsZTpob3ZlciAjYXB0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc29mYS5wbmcpO1xufVxuXG4jYW1lbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3dhc2hpbmctbWFjaGluZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogNzFweDtcbiAgbWFyZ2luOiAxMyUgMzIlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi50aWxlOmhvdmVyICNhbWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlYXRlci5wbmcpO1xufVxuXG4jZ2FsbGVyeSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3R3by1wb2xhcm9pZC1waWN0dXJlcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogNzFweDtcbiAgbWFyZ2luOiAxMyUgMzIlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi50aWxlOmhvdmVyICNnYWxsZXJ5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FtZXJhLnBuZyk7XG59XG5cbiNjb250YWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc21hcnRwaG9uZS1jYWxsLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiA3MXB4O1xuICBtYXJnaW46IDEzJSAzMiU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnRpbGU6aG92ZXIgI2NvbnRhY3Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9tYWlsLnBuZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/tiles/tiles.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/tiles/tiles.component.ts ***!
  \***********************************************/
/*! exports provided: TilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilesComponent", function() { return TilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TilesComponent = /** @class */ (function () {
    function TilesComponent() {
    }
    TilesComponent.prototype.ngOnInit = function () {
    };
    TilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tiles',
            template: __webpack_require__(/*! raw-loader!./tiles.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/tiles/tiles.component.html"),
            styles: [__webpack_require__(/*! ./tiles.component.scss */ "./src/app/home/tiles/tiles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TilesComponent);
    return TilesComponent;
}());



/***/ }),

/***/ "./src/app/residents/residents.component.scss":
/*!****************************************************!*\
  !*** ./src/app/residents/residents.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n#resident-main {\n  background: #e0e0e0;\n  margin-top: 100px;\n}\n.main {\n  max-width: 980px;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\na {\n  text-decoration: none;\n}\nh1 {\n  text-align: center;\n  font-family: Lulo;\n  font-size: 40px;\n  padding: 15px 0 0 0;\n  margin: auto;\n}\n.tile {\n  width: 210px;\n  height: 250px;\n  background: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin: 0 0 50px 0;\n  position: relative;\n}\n.overlay {\n  height: 145px;\n  width: 210px;\n  font-size: 18px;\n  font-family: Helvetica, sans-serif;\n  font-weight: bold;\n  background: #78C445;\n  color: white;\n  font-weight: bold;\n  padding: 6% 6% 0 7%;\n  letter-spacing: 2px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.overlay hr {\n  width: 90px;\n  border: solid 1.5px #fff;\n  margin: 4px 0 0 0;\n}\np {\n  font-family: Helvetica, sans-serif;\n  color: #fff;\n  font-size: 15px;\n  letter-spacing: 0;\n  font-weight: 150;\n}\n#rent {\n  background-image: url('dollar-coin-money.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#rent:hover {\n  background-image: url('dollar-coin-money-dark.png');\n}\n#maintenance {\n  background-image: url('tools.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#maintenance:hover {\n  background-image: url('tools-dark.png');\n}\n#reserve {\n  background-image: url('calendar.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#reserve:hover {\n  background-image: url('calendar-dark.png');\n}\n#portal {\n  background-image: url('profile.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#portal:hover {\n  background-image: url('profile-dark.png');\n}\n#renew {\n  background-image: url('pencil.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#renew:hover {\n  background-image: url('pencil-dark.png');\n}\n#ward {\n  background-image: url('search.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#ward:hover {\n  background-image: url('search-dark.png');\n}\n#report {\n  background-image: url('tasks.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#report:hover {\n  background-image: url('tasks-dark.png');\n}\n#clean {\n  background-image: url('spray.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 80px;\n  margin: 6% 31%;\n  -webkit-transition: background-image 0.3s ease-in-out;\n  transition: background-image 0.3s ease-in-out;\n}\n#clean:hover {\n  background-image: url('spray-dark.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzaWRlbnRzL0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxccmVzaWRlbnRzXFxyZXNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc2lkZW50cy9yZXNpZGVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUFZLG1CQUFBO0VBQ1IsMEVBQUE7RUFDQSxpZUFBQTtBQ0NKO0FETUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDSko7QURPQTtFQUNJLHFCQUFBO0FDSko7QURPQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDSko7QURPQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSko7QURPQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0FDSko7QURPQTtFQUNJLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSko7QURRQTtFQUNJLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtBQ0xKO0FEUUE7RUFDSSxtREFBQTtBQ0xKO0FEUUE7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNMSjtBRFFBO0VBQ0ksdUNBQUE7QUNMSjtBRFFBO0VBQ0kscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUFBLDZDQUFBO0FDTEo7QURRQTtFQUNJLDBDQUFBO0FDTEo7QURRQTtFQUNJLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtBQ0xKO0FEUUE7RUFDSSx5Q0FBQTtBQ0xKO0FEUUE7RUFDSSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNMSjtBRFFBO0VBQ0ksd0NBQUE7QUNMSjtBRFFBO0VBQ0ksbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUFBLDZDQUFBO0FDTEo7QURRQTtFQUNJLHdDQUFBO0FDTEo7QURRQTtFQUNJLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFBQSw2Q0FBQTtBQ0xKO0FEUUE7RUFDSSx1Q0FBQTtBQ0xKO0FEUUE7RUFDSSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFEQUFBO0VBQUEsNkNBQUE7QUNMSjtBRFFBO0VBQ0ksdUNBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL3Jlc2lkZW50cy9yZXNpZGVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xyXG4gICAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuI3Jlc2lkZW50LW1haW4ge1xyXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogTHVsbztcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMCAwIDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50aWxlIHtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDAgMCA1MHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8vaGFzIHRvIGJlIHJlbGF0aXZlIHNvIGFic29sdXRlIHBvc2l0aW9uaW5nIHdvcmtzIG9uIG92ZXJsYXlcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgaGVpZ2h0OiAxNDVweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICM3OEM0NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDYlIDYlIDAgNyU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLm92ZXJsYXkgaHIge1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDEuNXB4ICNmZmY7XHJcbiAgICBtYXJnaW46IDRweCAwIDAgMDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxNTA7XHJcbn1cclxuXHJcbi8vaWNvbnNcclxuI3JlbnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZG9sbGFyLWNvaW4tbW9uZXkucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDYlIDMxJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcmVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9kb2xsYXItY29pbi1tb25leS1kYXJrLnBuZyk7XHJcbn1cclxuXHJcbiNtYWludGVuYW5jZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy90b29scy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogNiUgMzElO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNtYWludGVuYW5jZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy90b29scy1kYXJrLnBuZyk7XHJcbn1cclxuXHJcbiNyZXNlcnZlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL2NhbGVuZGFyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiA2JSAzMSU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3Jlc2VydmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FsZW5kYXItZGFyay5wbmcpO1xyXG59XHJcblxyXG4jcG9ydGFsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Byb2ZpbGUucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDYlIDMxJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcG9ydGFsOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Byb2ZpbGUtZGFyay5wbmcpO1xyXG59XHJcblxyXG4jcmVuZXcge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcGVuY2lsLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiA2JSAzMSU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI3JlbmV3OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3BlbmNpbC1kYXJrLnBuZyk7XHJcbn1cclxuXHJcbiN3YXJkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NlYXJjaC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogNiUgMzElO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiN3YXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NlYXJjaC1kYXJrLnBuZyk7XHJcbn1cclxuXHJcbiNyZXBvcnQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGFza3MucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW46IDYlIDMxJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jcmVwb3J0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Rhc2tzLWRhcmsucG5nKTtcclxufVxyXG5cclxuI2NsZWFuIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NwcmF5LnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiA2JSAzMSU7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2NsZWFuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NwcmF5LWRhcmsucG5nKTtcclxufSIsIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMdWxvXCI7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcbn1cbiNyZXNpZGVudC1tYWluIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBhZGRpbmc6IDE1cHggMCAwIDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpbGUge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMCAwIDUwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ub3ZlcmxheSB7XG4gIGhlaWdodDogMTQ1cHg7XG4gIHdpZHRoOiAyMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogIzc4QzQ0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogNiUgNiUgMCA3JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5vdmVybGF5IGhyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGJvcmRlcjogc29saWQgMS41cHggI2ZmZjtcbiAgbWFyZ2luOiA0cHggMCAwIDA7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZm9udC13ZWlnaHQ6IDE1MDtcbn1cblxuI3JlbnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9kb2xsYXItY29pbi1tb25leS5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA2JSAzMSU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI3JlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9kb2xsYXItY29pbi1tb25leS1kYXJrLnBuZyk7XG59XG5cbiNtYWludGVuYW5jZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Rvb2xzLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDYlIDMxJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jbWFpbnRlbmFuY2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy90b29scy1kYXJrLnBuZyk7XG59XG5cbiNyZXNlcnZlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FsZW5kYXIucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogNiUgMzElO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNyZXNlcnZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2FsZW5kYXItZGFyay5wbmcpO1xufVxuXG4jcG9ydGFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcHJvZmlsZS5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA2JSAzMSU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI3BvcnRhbDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Byb2ZpbGUtZGFyay5wbmcpO1xufVxuXG4jcmVuZXcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy9wZW5jaWwucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogNiUgMzElO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNyZW5ldzpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3BlbmNpbC1kYXJrLnBuZyk7XG59XG5cbiN3YXJkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2VhcmNoLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW46IDYlIDMxJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4jd2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NlYXJjaC1kYXJrLnBuZyk7XG59XG5cbiNyZXBvcnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9pY29ucy90YXNrcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luOiA2JSAzMSU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuI3JlcG9ydDpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3Rhc2tzLWRhcmsucG5nKTtcbn1cblxuI2NsZWFuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc3ByYXkucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbjogNiUgMzElO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbiNjbGVhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL2ljb25zL3NwcmF5LWRhcmsucG5nKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/residents/residents.component.ts":
/*!**************************************************!*\
  !*** ./src/app/residents/residents.component.ts ***!
  \**************************************************/
/*! exports provided: ResidentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResidentsComponent", function() { return ResidentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResidentsComponent = /** @class */ (function () {
    function ResidentsComponent() {
    }
    ResidentsComponent.prototype.ngOnInit = function () {
    };
    ResidentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-residents',
            template: __webpack_require__(/*! raw-loader!./residents.component.html */ "./node_modules/raw-loader/index.js!./src/app/residents/residents.component.html"),
            styles: [__webpack_require__(/*! ./residents.component.scss */ "./src/app/residents/residents.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResidentsComponent);
    return ResidentsComponent;
}());



/***/ }),

/***/ "./src/app/sign/sign.component.scss":
/*!******************************************!*\
  !*** ./src/app/sign/sign.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.sign-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header-pic {\n  background-image: url('parking-lot.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  height: 415px;\n  width: 100%;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 660px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#instruc p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\nul {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXHNpZ25cXHNpZ24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtR0FBQTtBQUVSO0VBQ0UsbUJBQUE7RUFDQSwwRUFBQTtFQUNBLGllQUFBO0FDQUY7QURPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDTEY7QURRQTtFQUNFLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaWduL3NpZ24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4uc2lnbi1tYWluIHtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jaGVhZGVyLXBpYyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9uZXctaW1hZ2VzL3BhcmtpbmctbG90LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogNDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIgcCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB3aWR0aDogNjYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiNpbnN0cnVjIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbiIsIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMdWxvXCI7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcbn1cbi5zaWduLW1haW4ge1xuICBtYXgtd2lkdGg6IDk4MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbiNoZWFkZXItcGljIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9uZXctaW1hZ2VzL3BhcmtpbmctbG90LmpwZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MTVweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjYzZjNmM2O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcbn1cblxuI2hlYWRlciBwIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICB3aWR0aDogNjYwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4jaW5zdHJ1YyBwIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxudWwge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignComponent = /** @class */ (function () {
    function SignComponent() {
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign',
            template: __webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/index.js!./src/app/sign/sign.component.html"),
            styles: [__webpack_require__(/*! ./sign.component.scss */ "./src/app/sign/sign.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "./src/app/sub-pages/clean/clean.component.scss":
/*!******************************************************!*\
  !*** ./src/app/sub-pages/clean/clean.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.clean-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 630px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#instruc p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\nul {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 100;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 22px;\n  letter-spacing: 0;\n  text-align: center;\n  color: rgba(111, 182, 64, 0.938);\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXBhZ2VzL2NsZWFuL0M6XFxVc2Vyc1xcbGVhaGJcXEdvb2dsZSBEcml2ZVxcQ29sbGVnZSBTdHVmZlxcU3ByaW5nIDIwMTlcXFNlbmlvciBQcm9qZWN0XFxOSC9zcmNcXGFwcFxcc3ViLXBhZ2VzXFxjbGVhblxcY2xlYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1Yi1wYWdlcy9jbGVhbi9jbGVhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtR0FBQTtBQUVSO0VBQ0UsbUJBQUE7RUFDQSwwRUFBQTtFQUNBLGllQUFBO0FDQUY7QURPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDTEY7QURRQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0xGO0FEUUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3N1Yi1wYWdlcy9jbGVhbi9jbGVhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi5jbGVhbi1tYWluIHtcclxuICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzZjNmM2O1xyXG4gIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xyXG59XHJcblxyXG4jaGVhZGVyIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgd2lkdGg6IDYzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4jaW5zdHJ1YyBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMTExLCAxODIsIDY0LCAwLjkzOCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG4uY2xlYW4tbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI2hlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xufVxuXG4jaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA2MzBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNpbnN0cnVjIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG51bCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxMTEsIDE4MiwgNjQsIDAuOTM4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-pages/clean/clean.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sub-pages/clean/clean.component.ts ***!
  \****************************************************/
/*! exports provided: CleanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanComponent", function() { return CleanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CleanComponent = /** @class */ (function () {
    function CleanComponent() {
    }
    CleanComponent.prototype.ngOnInit = function () {
    };
    CleanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clean',
            template: __webpack_require__(/*! raw-loader!./clean.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-pages/clean/clean.component.html"),
            styles: [__webpack_require__(/*! ./clean.component.scss */ "./src/app/sub-pages/clean/clean.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CleanComponent);
    return CleanComponent;
}());



/***/ }),

/***/ "./src/app/sub-pages/rent/rent.component.scss":
/*!****************************************************!*\
  !*** ./src/app/sub-pages/rent/rent.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.rent-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 660px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#pay p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\nh2 {\n  font-family: Lulo;\n  font-size: 22px;\n  letter-spacing: 0;\n  text-align: center;\n  color: rgba(111, 182, 64, 0.938);\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXBhZ2VzL3JlbnQvQzpcXFVzZXJzXFxsZWFoYlxcR29vZ2xlIERyaXZlXFxDb2xsZWdlIFN0dWZmXFxTcHJpbmcgMjAxOVxcU2VuaW9yIFByb2plY3RcXE5IL3NyY1xcYXBwXFxzdWItcGFnZXNcXHJlbnRcXHJlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1Yi1wYWdlcy9yZW50L3JlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zdWItcGFnZXMvcmVudC9yZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLnJlbnQtbWFpbiB7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcclxufVxyXG5cclxuI2hlYWRlciBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiA2NjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuI3BheSBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IEx1bG87XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiYSgxMTEsIDE4MiwgNjQsIDAuOTM4KTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XG59XG4ucmVudC1tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG59XG5cbiNoZWFkZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDY2MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuI3BheSBwIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuaDIge1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiAyMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogcmdiYSgxMTEsIDE4MiwgNjQsIDAuOTM4KTtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-pages/rent/rent.component.ts":
/*!**************************************************!*\
  !*** ./src/app/sub-pages/rent/rent.component.ts ***!
  \**************************************************/
/*! exports provided: RentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentComponent", function() { return RentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RentComponent = /** @class */ (function () {
    function RentComponent() {
    }
    RentComponent.prototype.ngOnInit = function () {
    };
    RentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rent',
            template: __webpack_require__(/*! raw-loader!./rent.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-pages/rent/rent.component.html"),
            styles: [__webpack_require__(/*! ./rent.component.scss */ "./src/app/sub-pages/rent/rent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RentComponent);
    return RentComponent;
}());



/***/ }),

/***/ "./src/app/sub-pages/report/report.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sub-pages/report/report.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.report-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 620px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#instruc p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXBhZ2VzL3JlcG9ydC9DOlxcVXNlcnNcXGxlYWhiXFxHb29nbGUgRHJpdmVcXENvbGxlZ2UgU3R1ZmZcXFNwcmluZyAyMDE5XFxTZW5pb3IgUHJvamVjdFxcTkgvc3JjXFxhcHBcXHN1Yi1wYWdlc1xccmVwb3J0XFxyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1Yi1wYWdlcy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG1HQUFBO0FBRVI7RUFDRSxtQkFBQTtFQUNBLDBFQUFBO0VBQ0EsaWVBQUE7QUNBRjtBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDTEY7QURRQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvc3ViLXBhZ2VzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkP2ZhbWlseT1MdWxvQ2xlYW5XMDEtT25lQm9sZCk7XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogXCJMdWxvXCI7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG59XHJcblxyXG4ucmVwb3J0LW1haW4ge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIgcCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB3aWR0aDogNjIwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiNpbnN0cnVjIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuLnJlcG9ydC1tYWluIHtcbiAgbWF4LXdpZHRoOiA5ODBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogTHVsbztcbiAgZm9udC1zaXplOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XG59XG5cbiNoZWFkZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgd2lkdGg6IDYyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuI2luc3RydWMgcCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/sub-pages/report/report.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sub-pages/report/report.component.ts ***!
  \******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-pages/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/sub-pages/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/sub-pages/request/request.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sub-pages/request/request.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.request-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 660px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#instruc p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\n.row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  width: 100%;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n#left {\n  background-image: url('m-left-design.JPG');\n  width: 430px;\n  height: 360px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n#right {\n  background-image: url('m-right-design.JPG');\n  width: 430px;\n  height: 360px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\ninput, textarea {\n  margin: 5px 0 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXBhZ2VzL3JlcXVlc3QvQzpcXFVzZXJzXFxsZWFoYlxcR29vZ2xlIERyaXZlXFxDb2xsZWdlIFN0dWZmXFxTcHJpbmcgMjAxOVxcU2VuaW9yIFByb2plY3RcXE5IL3NyY1xcYXBwXFxzdWItcGFnZXNcXHJlcXVlc3RcXHJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1Yi1wYWdlcy9yZXF1ZXN0L3JlcXVlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBQ0xGO0FEUUE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FEUUE7RUFDRSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FEUUE7RUFDSSxvQkFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvc3ViLXBhZ2VzL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKC8vZGIub25saW5ld2ViZm9udHMuY29tL2MvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQ/ZmFtaWx5PUx1bG9DbGVhblcwMS1PbmVCb2xkKTtcclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcclxuICBzcmM6IHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuZW90XCIpO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnN2ZyNMdWxvQ2xlYW5XMDEtT25lQm9sZFwiKSBmb3JtYXQoXCJzdmdcIik7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LW1haW4ge1xyXG4gIG1heC13aWR0aDogOTgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogTHVsbztcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHggMCAxMHB4IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIgcCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB3aWR0aDogNjYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbiNpbnN0cnVjIHAge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbiNsZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tLWxlZnQtZGVzaWduLkpQRyk7XHJcbiAgd2lkdGg6IDQzMHB4O1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbiNyaWdodCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbS1yaWdodC1kZXNpZ24uSlBHKTtcclxuICB3aWR0aDogNDMwcHg7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuaW5wdXQsIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbjogNXB4IDAgMTVweCAwO1xyXG59IiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuLnJlcXVlc3QtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI2hlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xufVxuXG4jaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA2NjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNpbnN0cnVjIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbiNsZWZ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbS1sZWZ0LWRlc2lnbi5KUEcpO1xuICB3aWR0aDogNDMwcHg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuI3JpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbS1yaWdodC1kZXNpZ24uSlBHKTtcbiAgd2lkdGg6IDQzMHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIG1hcmdpbjogNXB4IDAgMTVweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sub-pages/request/request.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sub-pages/request/request.component.ts ***!
  \********************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RequestComponent = /** @class */ (function () {
    function RequestComponent() {
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! raw-loader!./request.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-pages/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/sub-pages/request/request.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/sub-pages/reserve/reserve.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/sub-pages/reserve/reserve.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(//db.onlinewebfonts.com/c/39a2c7f346d5cfae7045aeb2fb50d9ad?family=LuloCleanW01-OneBold);\n@font-face {\n  font-family: \"Lulo\";\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/39a2c7f346d5cfae7045aeb2fb50d9ad.svg#LuloCleanW01-OneBold\") format(\"svg\");\n}\n.reserve-main {\n  max-width: 980px;\n  margin: auto;\n  background-color: #fff;\n}\n#header {\n  background: #c6c6c6;\n  margin-top: 100px;\n  margin-bottom: 30px;\n}\nh1 {\n  margin: 0;\n  font-family: Lulo;\n  font-size: 40px;\n  text-align: center;\n  padding: 20px 0 10px 0;\n}\n#header p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  text-align: justify;\n  width: 660px;\n  margin: auto;\n  line-height: 23px;\n  padding-bottom: 30px;\n  font-weight: 100;\n}\n#instruc p {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 100;\n}\nul {\n  font-family: Helvetica, sans-serif;\n  font-size: 18px;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViLXBhZ2VzL3Jlc2VydmUvQzpcXFVzZXJzXFxsZWFoYlxcR29vZ2xlIERyaXZlXFxDb2xsZWdlIFN0dWZmXFxTcHJpbmcgMjAxOVxcU2VuaW9yIFByb2plY3RcXE5IL3NyY1xcYXBwXFxzdWItcGFnZXNcXHJlc2VydmVcXHJlc2VydmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N1Yi1wYWdlcy9yZXNlcnZlL3Jlc2VydmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsbUdBQUE7QUFFUjtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFDQSxpZUFBQTtBQ0FGO0FET0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjtBRFFBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNMRjtBRFFBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FEUUE7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEY7QURRQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zdWItcGFnZXMvcmVzZXJ2ZS9yZXNlcnZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVsb1wiO1xyXG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5lb3RcIik7XHJcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLFxyXG4gICAgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksXHJcbiAgICB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSxcclxuICAgIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQuc3ZnI0x1bG9DbGVhblcwMS1PbmVCb2xkXCIpIGZvcm1hdChcInN2Z1wiKTtcclxufVxyXG5cclxuLnJlc2VydmUtbWFpbiB7XHJcbiAgbWF4LXdpZHRoOiA5ODBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogI2M2YzZjNjtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBMdWxvO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwIDEwcHggMDtcclxufVxyXG5cclxuI2hlYWRlciBwIHtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHdpZHRoOiA2NjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuI2luc3RydWMgcCB7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxudWwge1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZD9mYW1pbHk9THVsb0NsZWFuVzAxLU9uZUJvbGQpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkx1bG9cIjtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdFwiKTtcbiAgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMzlhMmM3ZjM0NmQ1Y2ZhZTcwNDVhZWIyZmI1MGQ5YWQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzM5YTJjN2YzNDZkNWNmYWU3MDQ1YWViMmZiNTBkOWFkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8zOWEyYzdmMzQ2ZDVjZmFlNzA0NWFlYjJmYjUwZDlhZC5zdmcjTHVsb0NsZWFuVzAxLU9uZUJvbGRcIikgZm9ybWF0KFwic3ZnXCIpO1xufVxuLnJlc2VydmUtbWFpbiB7XG4gIG1heC13aWR0aDogOTgwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI2hlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNjNmM2YzY7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IEx1bG87XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDAgMTBweCAwO1xufVxuXG4jaGVhZGVyIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA2NjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbiNpbnN0cnVjIHAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG51bCB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sub-pages/reserve/reserve.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sub-pages/reserve/reserve.component.ts ***!
  \********************************************************/
/*! exports provided: ReserveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReserveComponent", function() { return ReserveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReserveComponent = /** @class */ (function () {
    function ReserveComponent() {
    }
    ReserveComponent.prototype.ngOnInit = function () {
    };
    ReserveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reserve',
            template: __webpack_require__(/*! raw-loader!./reserve.component.html */ "./node_modules/raw-loader/index.js!./src/app/sub-pages/reserve/reserve.component.html"),
            styles: [__webpack_require__(/*! ./reserve.component.scss */ "./src/app/sub-pages/reserve/reserve.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReserveComponent);
    return ReserveComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\leahb\Google Drive\College Stuff\Spring 2019\Senior Project\NH\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map