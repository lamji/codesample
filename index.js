const url_base = window.location.origin
fetch(url_base + '/api/resource/Sample')
.then(res => res.json())
.then(res => {
console.log(res)
})

var newHTML = `
<div class="container"> 
	<br>
    <h2 class="align-content-center">Student Application Form</h2>
    
	<br>
    <div class="row text-center">
        <div class="col">
            <img src="files/file.png" width="50px">
            <p> Application </p>
            <hr class="solid">
        </div>
        <div class="col">
            <img src="files/user.png" width="50px">
            <p> Admission </p>
            <hr class="solid-unselected">
        </div>
        <div class="col">
            <img src="files/clipboards.png" width="50px">
            <p> Enlistment </p>
            <hr class="solid-unselected">
        </div>
        <div class="col">
            <img src="files/bill.png" width="50px">
            <p> Biling </p>
            <hr class="solid-unselected">
        </div>
        <div class="col">
            <img src="files/check.png" width="50px">
            <p> Confirmation </p>
            <hr class="solid-unselected">
        </div>
    </div>
</div> 

<br>

<div class="container">
    <h2> Personal Information </h2>
    <p class="red-text">*Required Fields</p> 
    <br>
    <form>
		<h4> Student Name </h4>
        <div class="row">
            <div class="col-3">
                <label for="fname">First Name<span class="red-text">*</span></label>
                <br>
                <input type="text" id="fname" name="fname" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="mname">Middle Name</label>
                <br>
                <input type="text" id="mname" name="mname" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="mname">Last Name<span class="red-text">*</span></label>
                <br>
                <input type="text" id="lname" name="lname" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>
			
            <div class="col">
                <label for="mname">Suffix</label>
                <br>
                <select name="suffix" id="suffix" style="min-width:70px; min-height: 30px">
                </select>
            </div>
        </div>

		<br>
		<br>
		<h4> Personal Information </h4>
		<div class="row">
            <div class="col-3">
                <label for="dateOfBirth">Date of Birth<span class="red-text">*</span></label>
                <br>
                <input type="text" id="dateOfBirth" name="dateOfBirth" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="gender">Gender<span class="red-text">*</span></label>
                <br>
                <select name="gender" id="gender" style="min-width: 370px; min-height: 30px;">
                </select>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="nat">Nationality<span class="red-text">*</span></label>
                <br>
                <select name="nat" id="nat" style="min-width: 370px; min-height: 30px;">
                </select>
            </div>

			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
        </div>

		<br>
		<br>
		<h4> Contact Information </h4>
		<div class="row">
            <div class="col-3">
                <label for="email">E-mail Address<span class="red-text">*</span></label>
                <br>
                <input type="text" id="email" name="email" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="mobileNum">Mobile Number<span class="red-text">*</span></label>
                <br>
                <input type="text" id="mobileNum" name="mobileNum" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
			<div id="spacer" class="col-3"></div>

        </div>

		<br>
		<br>
		<h4> Home Address </h4>
		<div class="row">
            <div class="col">
                <label for="streetAddress">Street Address<span class="red-text">*</span></label>
                <br>
                <input type="text" id="streetAddress" name="streetAddress" size="153"> </input>
            </div>
        </div>
		<br>
		<div class="row">
            <div class="col-3">
                <label for="buildingUnit">Building/Unit No.<span class="red-text">*</span></label>
                <br>
                <input type="text" id="buildingUnit" name="buildingUnit" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="barangay">Barangay<span class="red-text">*</span></label> 
                <br>
                <input type="text" id="barangay" name="barangay" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

			<div class="col-3">
				<label for="city">City<span class="red-text">*</span></label>
				<br>
				<input type="text" id="city" name="city" size="45"> </input>
			</div>

			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
        </div>
		<br>
		<div class="row">
            <div class="col-3">
                <label for="region">Region<span class="red-text">*</span></label>
                <br>
                <input type="text" id="region" name="region" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>

            <div class="col-3">
                <label for="zipCode">Zip Code<span class="red-text">*</span></label>
                <br>
                <input type="text" id="zipCode" name="zipCode" size="45"> </input>
            </div>

			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
			<div id="spacer" class="col"></div>
			<div id="spacer" class="col-3"></div>
        </div>


		<br>
		<div class="row" style="padding-bottom: 30px">
			<div>
				<button class="btn btn-danger" style="margin-left: 15px; background-color: #7A0301;"> Continue </button>
				<button class="btn btn-light" style="margin-left: 15px"> Back </button>
			</div>
		</div>

    </form>
</div>
`

$('Body').append(newHTML);
