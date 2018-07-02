function postData(data) {
 return http
   .post(`example.com/user/create`, data);
}
function validate(data) {
 // check if data is defined
 if (data === undefined) {
   return false;
 }
// check if email is well formed
 if (!regex(data['email'])) {
   return false;
 }
// check if password is atleast 8 chars.
 if (data['password'].length >= 8) {
   return false;
 }
  return true;
}
function appendUsers(userId) {
  this.users.append(response.userid);
}
function main() {
 if (validate(data)) {
  postData(data)
   .then(data => appendToList(data.userId))
   .catch(error => handleError(error))
 } else {
  showValidationError();
 }
}