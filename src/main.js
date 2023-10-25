import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { viewAdminProducts } from "../pages/admin/products.js";
import { viewAdminCategories } from "../pages/admin/categories.js";
import { viewIndexShop } from "../pages/index.js";
import { viewIndex } from "../pages/index.js";

import {router} from './modules/routes';


router
  .on("/", function () {
    // document.getElementById("viewIndex").innerHTML = ;
  })
  .on("/admin", function () {
    document.getElementById("viewIndex").innerHTML = viewAdminCategories();
  })
  .on("/admin/products", function () {
    document.getElementById("viewIndex").innerHTML = viewAdminProducts();
  })
  .on("/admin/categories", function () {
    document.getElementById("viewIndex").innerHTML = viewAdminCategories();
  })
  .on("/shops", function () {
    document.getElementById("viewIndex").innerHTML = viewIndexShop();
  })
  // .on("/members", function () {
  //   document.querySelector("#content").innerHTML = `<h2>This is the members page</h2>`;
  // })
  .resolve();

  const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'right',
        y: 'top',
    },
  });

 