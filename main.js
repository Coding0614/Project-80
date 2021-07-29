guest_names_array = [];
display_guest_names = [];
function Submit(){
    guest_names = document.getElementById("Party_Guest_Names").value;
    console.log(guest_names);
    guest_names_array.push(guest_names);
    document.getElementById("Names_List").innerHTML = guest_names_array;
}
function Show(){
    length_of_guest_names_array = guest_names_array.length;
    console.log(length_of_guest_names_array);
    for(i=0;i<guest_names_array.length;i++){
        display_guest_names.push("<h4>" + guest_names_array[i] + "</h4>");
        console.log(display_guest_names); 
    }
    console.log(display_guest_names);
    var remove_commas = display_guest_names.join(" ");
    document.getElementById("Ordered_Name_List").innerHTML = remove_commas;
    document.getElementById("Sort_List").style.display = "inline-block";
}
function Sort(){
    guest_names_array.sort();
    console.log(guest_names_array);
    sorted_guest_names_array = [];
    length_of_guest_names_array = guest_names_array.length;
    for(j=0;j < guest_names_array.length;j++){
        sorted_guest_names_array.push("<h4>" + guest_names_array[j] + "</h4>");
        console.log(sorted_guest_names_array);
    }
    console.log(sorted_guest_names_array);
    var remove_commas = sorted_guest_names_array.join(" ");
    console.log(remove_commas);
    document.getElementById("Sorted_List").innerHTML = remove_commas;
}
function Search(){
    var search_input = document.getElementById("Name_Search").value;
    var num_found = 0;
    for(j=0;j<guest_names_array.length;j++){
        if(search_input == guest_names_array[j]){
            num_found = num_found + 1;
        }
    }
    document.getElementById("Found_Name").innerHTML = "<br>" + "This name was found " + num_found + " time(s)";
    console.log("Name was found "+num_found+" time/s");
}