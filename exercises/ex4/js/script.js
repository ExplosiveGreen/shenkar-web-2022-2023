window.onload = function () {
    const fullName = $('#fullName');
    const password = $('#password');
    const interests = $('#interests');
    const email = $('#email');
    const website = $('#website');
    const phone = $('#phone');
    const age = $('#age');
    const temper = $('#temper');
    const clubForm = $('#clubForm');

    customValidationMsg(validateinterests(), interests);

    fullName.change( function (e) { customValidationMsg(validateFullName(), fullName) } );
    password.change( function (e) { customValidationMsg(validatePassword(), password) } );
    interests.change( function (e) { customValidationMsg(validateinterests(), interests) } );
    email.change( function (e) { customValidationMsg(validateEmail(), email) } );
    website.change( function (e) { customValidationMsg(validateWebsite(), website) } );
    phone.change( function (e) { customValidationMsg(validatePhone(), phone) } );
    age.change( function (e) { customValidationMsg(validateAge(), age) } );
    temper.on( "input", function (e) { document.getElementById('temperValue').innerHTML = temper.val() } );
    clubForm.submit( validateForm );

    function customValidationMsg(valid, input) {
        input.removeClass('is-valid');
        input.removeClass('is-invalid');
        input.addClass(valid ? 'is-valid' : 'is-invalid');
    }
    function validateFullName() {
        const fullNameReg = /^[a-zA-Z\s]*$/;
        return fullNameReg.test(fullName.val()) && fullName.val().indexOf(' ') != -1;
    }
    function validatePassword() {
        const pass_one_big = /.*[A-Z]/;
        const pass_one_small = /.*[a-z]/;
        return pass_one_big.test(password.val()) && pass_one_small.test(password.val()) && password.val().length >= 8;
    }
    function validateinterests() {
        let count = 0;
        const interestsList = interests.find('input');
        for (let i = 0; i < interestsList.length; i++) {
            if ($(interestsList[i]).is(':checked')) {
                count++
            }
        }
        return count >= 3;
    }
    function validateEmail() {
        return email[0].validity.valid;
    }
    function validateWebsite() {
        return website[0].validity.valid;
    }
    function validatePhone() {
        return phone[0].validity.valid;
    }
    function validateAge() {
        return age.val() >= 23 && age.val() <= 38;
    }
    function validateForm(e) {
        return validateFullName() && validatePassword() && validateinterests() && validateEmail() && validateWebsite() && validatePhone() && validateAge();
    };
};