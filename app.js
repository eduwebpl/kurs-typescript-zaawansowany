var Availability;
(function (Availability) {
    Availability[Availability["Monday"] = 0] = "Monday";
    Availability[Availability["Tuesday"] = 1] = "Tuesday";
    Availability[Availability["Wednesday"] = '123'.length] = "Wednesday";
    Availability[Availability["Thursday"] = 4] = "Thursday";
    Availability[Availability["Friday"] = 5] = "Friday";
})(Availability || (Availability = {}));
var key = 'Monday';
Availability.Monday; /*?*/
Availability[key]; /*?*/
Availability[5]; /*?*/
var SupportedFileTypes;
(function (SupportedFileTypes) {
    SupportedFileTypes["png"] = "image/png";
    SupportedFileTypes["jpg"] = "image/jpeg";
})(SupportedFileTypes || (SupportedFileTypes = {}));
SupportedFileTypes.png; /*?*/
function foo(bar) { }
foo(SupportedFileTypes.png);
