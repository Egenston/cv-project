import React from 'react'

function PreviewButton() {
    return(
        <button id="preview-button" onClick={togglePreview}>Preview</button>
    )
}
function togglePreview(){
    document.querySelector(".cv-form").classList.toggle("active")
    document.getElementById("form").classList.toggle("active")
    document.getElementById("education-form").classList.toggle("active")
    document.getElementById("work-form").classList.toggle("active")
    if(document.querySelector(".cv-form").classList.contains("active")){
        document.getElementById("preview-button").textContent = "Edit"
    }
    else if(document.getElementById("form").classList.contains("active")){
        document.getElementById("preview-button").textContent = "Preview"
    }
}
export default PreviewButton
