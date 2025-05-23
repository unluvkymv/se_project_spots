console.log("Hello, World!")
const editProfileBtn = document.querySelector(".profile__edit-btn");
const newPostBtn = document.querySelector(".profile__add-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-btn") 
const editSubmitBtn = editProfileModal.querySelector(".modal__submit-btn")

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn") 
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn")

editProfileBtn.addEventListener("click", function () {  
    editProfileModal.classList.add("modal_is-opened");
});

editCloseBtn.addEventListener("click", function () {  
    editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function (){ 
    newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {  
    newPostModal.classList.remove("modal_is-opened");
});