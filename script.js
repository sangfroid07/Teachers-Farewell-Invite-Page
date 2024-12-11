document.addEventListener('DOMContentLoaded', function() {
    const farewellMessage = `
                === ✭ ===  ✭ === ✭ ===<br><br>
                Dear Teachers,<br><br>
                We are delighted to invite you to the farewell event<br>
                for the Class of 2025 at St. Mary's Convent School, Samtragachi,<br>
                on January 11th, 2025. This event will be a heartfelt celebration<br>
                of the journeys and accomplishments of our graduating students,<br>
                made possible by your unwavering dedication and guidance.<br><br>
                Please join us in honoring their achievements and sharing in<br>
                this memorable occasion. Your presence will mean a lot to us and to<br>
                the students whose lives you have profoundly impacted.<br><br>
                Warm regards,<br>
                𝑱𝒖𝒏𝒊𝒐𝒓𝒔 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏™<br><br>
                === ✭ ===  ✭ === ✭ ===<br><br>
                𝑱𝒖𝒏𝒊𝒐𝒓𝒔 𝑷𝒓𝒐𝒅𝒖𝒄𝒕𝒊𝒐𝒏 presents to you,<br>
                a short introductory video,<br>
                hope you like it!<br><br>
    `;

    document.getElementById('message').innerHTML = farewellMessage;
    document.getElementById('farewellVideo').src = "https://www.youtube.com/embed/YOUR_VIDEO_ID";

    // Fade out input container and fade in message container
    const inputContainer = document.getElementById('inputContainer');
    const messageContainer = document.getElementById('messageContainer');

    inputContainer.classList.add('fade-out');
    setTimeout(function() {
        inputContainer.style.display = 'none';
        messageContainer.style.display = 'block';
        messageContainer.classList.add('fade-in');
    }, 500); // Match this duration with the CSS transition time
});