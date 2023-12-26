    // Add event listeners for hover
    document.getElementById('card1').addEventListener('mouseenter', function () {
        document.getElementById('card2').querySelector('.card').classList.remove('active');
        document.getElementById('card1').querySelector('.card').classList.add('active');
    });
    
    document.getElementById('card2').addEventListener('mouseenter', function () {
        document.getElementById('card1').querySelector('.card').classList.remove('active');
        document.getElementById('card2').querySelector('.card').classList.add('active');
    });
    document.getElementById('card2').addEventListener('mouseleave', function () {
            document.getElementById('card2').querySelector('.card').classList.remove('active');
        });