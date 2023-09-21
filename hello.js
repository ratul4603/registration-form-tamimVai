
const nameBtn = document.getElementById("name-btn");
const contactBtn = document.getElementById("contact-btn");
const birthBtn = document.getElementById("birth-btn");
const previewBtn = document.getElementById("preview-btn");

const NextBtnName = document.getElementById("nxt-btn-nme");
const NextBtnContact = document.getElementById("nxt-btn-cntct");
const NextBtnBirth = document.getElementById("nxt-btn-birth");

const nameStep = document.querySelector(".name-step");
const contactStep = document.querySelector(".contact-step");
const birthStep = document.querySelector(".birth-step");
const previewStep = document.querySelector(".preview-step");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("number");
const birthDate = document.getElementById("date");
const birthPlace = document.getElementById("place");

const submitBtn = document.getElementById("submit-btn");

// contactPage
const contactPage = (e)=>{
    e.preventDefault();
    if(firstName.value && lastName.value){
        nameStep.style.display = "none";
        contactStep.style.display = "block";
        nameBtn.classList.remove("active");
        contactBtn.classList.add("active");
    }else{
        alert("Please fill up the information. Otherwise you will not be able to go to the next page.")
    }
}

NextBtnName.addEventListener("click", contactPage);

// birthPage
const birthPage = (e)=>{
    e.preventDefault();
    if(email.value && phone.value){
        contactStep.style.display = "none";
        birthStep.style.display = "block";
        contactBtn.classList.remove("active");
        birthBtn.classList.add("active");
    }else{
        alert("Please fill up the information. Otherwise you will not be able to go to the next page.")
    }
}

NextBtnContact.addEventListener("click", birthPage);

// previewPage
const previewPage = (e)=>{
    e.preventDefault();
    if(birthDate.value && birthPlace.value){
        birthStep.style.display = "none";
        previewStep.style.display = "block";
        birthBtn.classList.remove("active");
        previewBtn.classList.add("active");

        document.getElementById("pra-name").innerHTML = `Name: ${firstName.value +  lastName.value}`;
        document.getElementById("pra-email").innerHTML = `Email: ${email.value}`;
        document.getElementById("pra-phone").innerHTML = `Phone: ${phone.value}`;
        document.getElementById("pra-birth-date").innerHTML =`Birth Date: ${birthDate.value}`;
        document.getElementById("pra-birth-place").innerHTML =`Birth Place: ${birthPlace.value}`;
    }else{
        alert("Please fill up the information. Otherwise you will not be able to go to the next page.")
    }
}

NextBtnBirth.addEventListener("click", previewPage);

// namePage
const namePage = ()=>{
    previewStep.style.display = "none";
    nameStep.style.display = "block";
    previewBtn.classList.remove("active");
    nameBtn.classList.add("active");

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    phone.value = "";
    birthDate.value = "";
    birthPlace.value = "";
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    okBtn.style.display = "none";
}
// successfull
const successfull = ()=>{
    document.getElementById("pra-name").innerHTML = ``;
    document.getElementById("pra-email").innerHTML = ``;
    document.getElementById("pra-phone").innerHTML = `Submitted successfully✅🎉`;
    document.getElementById("pra-birth-date").innerHTML =``;
    document.getElementById("pra-birth-place").innerHTML =``;
    
    let okBtn = document.getElementById("okBtn");
    okBtn.style.display = "block";
    okBtn.classList.add("okBtn");
    okBtn.addEventListener("click", namePage);

    submitBtn.disabled = true;
    submitBtn.style.opacity = ".3";
}

submitBtn.addEventListener("click", successfull);