const noticeList = document.getElementById("noticeList");
const addNoticeForm = document.getElementById("addNoticeForm");

addNoticeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let category = document.getElementById("category").value;

  addNotice(title, category);
});

function addNotice(title, category) {
  let notice = document.createElement("div");
  notice.className = "notice";

  notice.innerHTML = `
      <h3>${category} </h3>

      <h2>${title}</h2>
    `;

  noticeList.append(notice);
}
