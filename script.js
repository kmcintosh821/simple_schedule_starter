const today = dayjs().format('dddd, MMMM D, YYYY');
const hourNow = dayjs().hour();

console.log(today);
console.log(hourNow);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    for(let blockHour = 9; blockHour <= 17; blockHour++) {
        
        //Hour ID string for ease of access
        const hourId = `#hour-${blockHour}`
        

        //Add color to the designated timeblock, depending on the current time
        let timeClass = () => {
            if (blockHour < hourNow) return 'past'
            else if (blockHour > hourNow) return 'future'
            else return 'present'
        }

        $(`${hourId}`).addClass(timeClass);

        //Retrieve local storage for designated block's text area
        $(`${hourId} textarea`).val(localStorage.getItem(hourId))

        //When the block's button is clicked...
        $(`${hourId} button`).click(() => {
            //The code saves the text area's contents to local storage
            localStorage.setItem(hourId, $(`${hourId} textarea`).val())
        })

        
    }

    // TODO: Add code to display the current date in the header of the page.
    $('#currentDay').text(today)
    
});
