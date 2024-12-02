var dropdownButton = document.querySelector('.dropbtn');
var dropdownContent = document.querySelector('.dropdown-content');

// Add an event listener to the dropdown button
dropdownButton.addEventListener('onclick', function() {
  // Toggle the display of the dropdown content
  dropdownContent.classList.toggle('show');
});


function toggleReadMore() {
  const moreText = document.getElementById("more-text");
  const btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btn.textContent = "Read Less";
  } else {
      moreText.style.display = "none";
      btn.textContent = "Read More";
  }
}

function toggleMore(){
  const moreContent = document.querySelector('#more-content');
  const readBtn = document.querySelector('#read-more');

  if(moreContent.style.display === 'none'){
    moreContent.style.display = 'inline';
    readBtn.textContent = 'Read Less'
  }else{
    moreContent.style.display = 'none';
    readBtn.textContent = 'Read More'
  }
}