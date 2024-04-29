function carousel() {
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
carousel();

const header = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY <= 0) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
});

function climbSPA() {
  const mountainsContent = document.getElementById("mountains");
  window.addEventListener("hashchange", function () {
    const tableDays = mountainsContent.children[1].children[1].children[0];
    const tableDestiny = mountainsContent.children[1].children[1].children[1];
    const hash = this.window.location.hash;
    if (hash === "#mountain01") {
      this.document.getElementById("mountain02").classList.remove("clicked");
      this.document.getElementById("mountain01").classList.add("clicked");
      mountainsContent.children[0].setAttribute(
        "src",
        "./assets/mountain01.jpg"
      );
      deleteNodes(tableDays);
      tableDays.innerHTML =
        "<p>25 Nov 2016</p><p>28 Nov 2016</p><p>18 Dec 2016</p><p>7 Jan 2017</p>";
      tableDays.children[2].setAttribute("style", "margin: 10px 0");
      tableDestiny.children[2].setAttribute("style", "margin: 10px 0");
      tableDestiny.children[1].setAttribute("style", "margin: 0");
    } else if (hash === "#mountain02") {
      this.document.getElementById("mountain01").classList.remove("clicked");
      this.document.getElementById("mountain02").classList.add("clicked");
      mountainsContent.children[0].setAttribute(
        "src",
        "./assets/mountain02.jpg"
      );
      deleteNodes(tableDays);
      tableDays.innerHTML =
        "<p>17 Nov 2016</p><p>13 Dec 2016</p><p>28 Dec 2016</p><p>9 Feb 2017</p>";
      tableDays.children[1].setAttribute("style", "margin: 10px 0 0");
      tableDays.children[2].setAttribute("style", "margin: 0 0 10px 0");
      tableDestiny.children[1].setAttribute("style", "margin: 10px 0 0");
      tableDestiny.children[2].setAttribute("style", "margin: 0 0 10px 0");
    }
  });
}
climbSPA();

function deleteNodes(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}
