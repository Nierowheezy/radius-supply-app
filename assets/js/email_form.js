const token = 'Token e02d7c8ee6ab3e5caac5eb68f28a317fbc866f4d';
const url = 'https://hngmailapi.herokuapp.com/api/emails/';

// get input value
var nameInput = document.getElementById('email');
let validation_output = document.getElementById('validation-output');

nameInput.value;

const email_data = {
  email: nameInput.value
};

document
  .querySelector('form.pure-form')
  .addEventListener('submit', function (e) {
    //prevent the normal submission of the form
    e.preventDefault();

    axios
      .post(
        url,
        {
          email: nameInput.value
        },
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then((res) => {
        if (res.data.error === 'duplicate email detected') {
          setTimeout(() => {
            document
              .getElementById('duplicate-error')
              .classList.add('duplicate');
          }, 1000);

          // duplicate

          setTimeout(function () {
            $('#duplicate-error').fadeOut('duplicate');
          }, 10000);

          // remove classlist
          return setTimeout(() => {
            document
              .getElementById('duplicate-error')
              .classList.remove('duplicate');
          }, 12000);
        }

        if (res.data) {
          setTimeout(() => {
            document.getElementById('validation-output').classList.add('show');
          }, 1000);
        }

        //success
        setTimeout(function () {
          $('#validation-output').fadeOut('fast');
        }, 10000);

        // remove classlist
        setTimeout(() => {
          document.getElementById('validation-output').classList.remove('show');
        }, 12000);

        console.log(res.data);
      })
      .catch((error) => {
        if (error === 'duplicate email detected') {
          setTimeout(() => {
            document
              .getElementById('duplicate-error')
              .classList.add('duplicate');
          }, 1000);

          // duplicate

          setTimeout(function () {
            $('#duplicate-error').fadeOut('duplicate');
          }, 10000);

          // remove classlist
          return setTimeout(() => {
            document
              .getElementById('duplicate-error')
              .classList.remove('duplicate');
          }, 12000);
        }

        if (error) {
          setTimeout(() => {
            document.getElementById('error').classList.add('display');
          }, 1000);
        }
        setTimeout(function () {
          $('#error').fadeOut('display');
        }, 10000);

        // remove classlist
        setTimeout(() => {
          document.getElementById('error').classList.remove('display');
        }, 12000);

        console.error(error);
      });

    // console.log(nameInput.value);
  });

/***fetch all emails saved Get Request */

// document.getElementById('get_list').addEventListener('click', function (e) {
//   e.preventDefault();

//   const data = axios
//     .get(url, {
//       headers: {
//         Authorization: token
//       }
//     })
//     .then((res) => {
//       console.log(res.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   console.log(data);
// });
