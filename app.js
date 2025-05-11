const breakfastBtn = document.querySelector(".breakfast-time");
const lunchBtn = document.querySelector(".lunch-time");
const dinnerBtn = document.querySelector(".dinner-time");

const breakfastMenu = document.querySelector("#breakfast-menu");
const lunchMenu = document.querySelector("#lunch-menu");
const dinnerMenu = document.querySelector("#dinner-menu");

const breakfastAmtBtn = document.querySelector("#breakfast-amt-btn");
const lunchAmtBtn = document.querySelector("#lunch-amt-btn");
const dinnerAmtBtn = document.querySelector("#dinner-amt-btn");

//built in functions
const hour = new Date().getHours();

if (hour >= 7 && hour < 13) {
  breakfastBtn.addEventListener("click", () => {
    if (breakfastMenu.style.display === "none") {
      breakfastMenu.style.display = "block";
      breakfastBtn.innerText = "Back";
    } else {
      breakfastMenu.style.display = "none";
      breakfastBtn.innerText = "Breakfast";
    }
    lunchMenu.style.display = "none";
    dinnerMenu.style.display = "none";
  });
  dinnerBtn.addEventListener("click", () => {
    alert("Dinner order starts from 19:00 PM.Order for BREAKFAST.!");
  });
} else if (hour >= 13 && hour <= 17) {
  lunchBtn.addEventListener("click", () => {
    if (lunchMenu.style.display === "none") {
      lunchMenu.style.display = "block";
      lunchBtn.innerText = "Back";
    } else {
      lunchMenu.style.display = "none";
      lunchBtn.innerText = "Lunch";
    }
  });

  breakfastBtn.addEventListener("click", () => {
    alert("Breakfast over.Order for LUNCH.!");
  });
  dinnerBtn.addEventListener("click", () => {
    alert("Dinner order starts from 19:00 PM.Order for LUNCH.!");
  });
} else if (hour >= 19 && hour <= 22) {
  dinnerBtn.addEventListener("click", () => {
    if (dinnerMenu.style.display === "none") {
      dinnerMenu.style.display = "block";
      dinnerBtn.innerText = "Back";
    } else {
      dinnerMenu.style.display = "none";
      dinnerBtn.innerText = "Dinner";
    }
    lunchMenu.style.display = "none";
    breakfastMenu.style.display = "none";
  });
} else if (hour < 7) {
  breakfastBtn.addEventListener("click", () => {
    alert("Order starts from 07:00 AM.!");
  });
  lunchBtn.addEventListener("click", () => {
    alert("Order starts from 07:00 AM.!");
  });
  dinnerBtn.addEventListener("click", () => {
    alert("Order starts from 07:00 AM.!");
  });
} else if (hour > 17 && hour < 19) {
  breakfastBtn.addEventListener("click", () => {
    alert("No orders taken till 19:00 PM.!");
  });
  lunchBtn.addEventListener("click", () => {
    alert("No orders taken till 19:00 PM.!");
  });
  dinnerBtn.addEventListener("click", () => {
    alert("No orders taken till 19:00 PM.!");
  });
} else if (hour > 22) {
  breakfastBtn.addEventListener("click", () => {
    alert("All orders CLOSED..!");
  });
  lunchBtn.addEventListener("click", () => {
    alert("All orders CLOSED..!");
  });
  dinnerBtn.addEventListener("click", () => {
    alert("All orders CLOSED..!");
  });
}

//to calculate total price define function
calTotalPrice = () => {
  //breakfast
  let idlyQty = document.querySelector("#idlyQty").value;
  let mdosaQty = document.querySelector("#mdosaQty").value;
  let pdosaQty = document.querySelector("#pdosaQty").value;
  let rdosaQty = document.querySelector("#rdosaQty").value;
  let uttapamQty = document.querySelector("#uttapamQty").value;
  let sandwichQty = document.querySelector("#sandwichQty").value;
  let pavbhajiQty = document.querySelector("#pavbhajiQty").value;
  let chanaQty = document.querySelector("#chanaQty").value;
  let pooriQty = document.querySelector("#pooriQty").value;
  let pavQty = document.querySelector("#pavQty").value;

  //lunch
  let rotiQty = document.querySelector("#rotiQty").value;
  let kulchaQty = document.querySelector("#kulchaQty").value;
  let pannerQty = document.querySelector("#pannerQty").value;
  let kajuQty = document.querySelector("#kajuQty").value;
  let masalaQty = document.querySelector("#masalaQty").value;
  let palakpannerQty = document.querySelector("#palakpannerQty").value;
  let friedQty = document.querySelector("#friedQty").value;
  let whitericeQty = document.querySelector("#whitericeQty").value;
  let alooQty = document.querySelector("#alooQty").value;

  let dalQty = document.querySelector("#dalQty").value;

  //dinner
  let curdriceQty = document.querySelector("#curdriceQty").value;
  let jeerariceQty = document.querySelector("#jeerariceQty").value;
  let cocoriceQty = document.querySelector("#cocoriceQty").value;
  let kpulaoQty = document.querySelector("#kpulaoQty").value;
  let curryQty = document.querySelector("#curryQty").value;
  let naanQty = document.querySelector("#naanQty").value;
  let pannermasalaQty = document.querySelector("#pannermasalaQty").value;
  let bisibelebathQty = document.querySelector("#bisibelebathQty").value;
  let lemonriceQty = document.querySelector("#lemonriceQty").value;
  let tomatoQty = document.querySelector("#tomatoQty").value;

  //to store total price
  let total = 0;
  //each dish cost
  //breakfast total
  total += idlyQty * 20;
  total += mdosaQty * 40;
  total += pdosaQty * 30;
  total += rdosaQty * 35;
  total += uttapamQty * 40;
  total += sandwichQty * 30;
  total += pavbhajiQty * 35;
  total += chanaQty * 50;
  total += pooriQty * 40;
  total += pavQty * 45;
  //lunch
  total += rotiQty * 20;
  total += kulchaQty * 40;
  total += pannerQty * 150;
  total += kajuQty * 120;
  total += masalaQty * 70;
  total += palakpannerQty * 130;
  total += friedQty * 90;
  total += whitericeQty * 30;
  total += alooQty * 100;
  total += dalQty * 80;

  //dinner
  total += curdriceQty * 100;
  total += jeerariceQty * 80;
  total += cocoriceQty * 100;
  total += kpulaoQty * 120;
  total += curryQty * 120;
  total += naanQty * 40;
  total += pannermasalaQty * 180;
  total += bisibelebathQty * 100;
  total += lemonriceQty * 80;
  total += tomatoQty * 85;

  //display the total price

  document.querySelector("#total-price-breakfast").innerText = total;
  document.querySelector("#total-price-lunch").innerText = total;
  document.querySelector("#total-price-dinner").innerText = total;
};
//calculate btn
breakfastAmtBtn.addEventListener("click", calTotalPrice);
lunchAmtBtn.addEventListener("click", calTotalPrice);
dinnerAmtBtn.addEventListener("click", calTotalPrice);
