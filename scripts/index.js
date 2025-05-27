const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const addCardFormElement = newPostModal.querySelector(".modal__form");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn"); 
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const newPostCardImageInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const cardImageEl = document.querySelector(".card__image");
const cardCaptionEl= document.querySelector(".card__title");

editProfileBtn.addEventListener("click", function () {  
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
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

function handleEditProfileSubmit (evt){
    evt.preventDefault();

     if (
    !editProfileNameInput.value.trim() ||
    !editProfileDescriptionInput.value.trim()
  ) {
    return;
  }
  
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(newPostCaptionInput.value);
  console.log(newPostCardImageInput.value);
   newPostModal.classList.remove("modal_is-opened");
}

addCardFormElement.addEventListener("submit", handleAddCardSubmit);