// shorthand
var _ = function (id) {return document.getElementById(id);};
// object framework
class Model {
    constructor(money, inventory, level) {
        this.money = money;
        this.inventory = inventory;
        this.level = level;
    }
}
// instance variables
var inventory_status = false;
var path_status = false;
var left_count = 0;
var right_count = 0;
var curr_ending = [];
var ending = "";
// endings
var e1 = [false,false,false,false,false,false];
var e2 = [false,false,false,false,false,true];
var e3 = [false,false,false,false,true,false];
var e4 = [false,false,false,false,true,true];
var e5 = [false,false,false,true,false,false];
var e6 = [false,false,false,true,false,true];
var e7 = [false,false,false,true,true,false];
var e8 = [false,false,false,true,true,true];
var e9 = [false,false,true,false,false,false];
var e10 = [false,false,true,false,false,true];
var e11 = [false,false,true,false,true,false];
var e12 = [false,false,true,false,true,true];
var e13 = [false,false,true,true,false,false];
var e14 = [false,false,true,true,false,true];
var e15 = [false,false,true,true,true,false];
var e16 = [false,false,true,true,true,true];
var e17 = [false,true,false,false,false,false];
var e18 = [false,true,false,false,false,true];
var e19 = [false,true,false,false,true,false];
var e20 = [false,true,false,false,true,true];
var e21 = [false,true,false,true,false,false];
var e22 = [false,true,false,true,false,true];
var e23 = [false,true,false,true,true,false];
var e24 = [false,true,false,true,true,true];
var e25 = [false,true,true,false,false,false];
var e26 = [false,true,true,false,false,true];
var e27 = [false,true,true,false,true,false];
var e28 = [false,true,true,false,true,true];
var e29 = [false,true,true,true,false,false];
var e30 = [false,true,true,true,false,true];
var e31 = [false,true,true,true,true,false];
var e32 = [false,true,true,true,true,true];
var e33 = [true,false,false,false,false,false];
var e34 = [true,false,false,false,false,true];
var e35 = [true,false,false,false,true,false];
var e36 = [true,false,false,false,true,true];
var e37 = [true,false,false,true,false,false];
var e38 = [true,false,false,true,false,true];
var e39 = [true,false,false,true,true,false];
var e40 = [true,false,false,true,true,true];
var e41 = [true,false,true,false,false,false];
var e42 = [true,false,true,false,false,true];
var e43 = [true,false,true,false,true,false];
var e44 = [true,false,true,false,true,true];
var e45 = [true,false,true,true,false,false];
var e46 = [true,false,true,true,false,true];
var e47 = [true,false,true,true,true,false];
var e48 = [true,false,true,true,true,true];
var e49 = [true,true,false,false,false,false];
var e50 = [true,true,false,false,false,true];
var e51 = [true,true,false,false,true,false];
var e52 = [true,true,false,false,true,true];
var e53 = [true,true,false,true,false,false];
var e54 = [true,true,false,true,false,true];
var e55 = [true,true,false,true,true,false];
var e56 = [true,true,false,true,true,true];
var e57 = [true,true,true,false,false,false];
var e58 = [true,true,true,false,false,true];
var e59 = [true,true,true,false,true,false];
var e60 = [true,true,true,false,true,true];
var e61 = [true,true,true,true,false,false];
var e62 = [true,true,true,true,false,true];
var e63 = [true,true,true,true,true,false];
var e64 = [true,true,true,true,true,true];

// load document
window.onload = function() {
    //-------------------------------------------plugins-------------------------------------------------//
    // Night Mode
    $("body").nightMode({autoEnable: true, keepNormal: "img, input, a, li, progress, #navbar"});
    // navbar
    window.onscroll = function() {stick()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function stick()
    {
        if (window.pageYOffset >= sticky)
        {navbar.classList.add("sticky")}
        else {navbar.classList.remove("sticky");}
    }
    //---------------------------------------------------------------------------------------------------//
    //-------------------------------------------functions-----------------------------------------------//
    /* function calls */
    _("a_inventory").onclick = inventory_display;
    _("a_path").onclick = path_display;
    _("left").onclick = left;
    _("end").onclick = end;
    _("right").onclick = right;

    /* function declarations */
    // function to expand and collapse inventory (HTML)
    function inventory_display() {
        var inventory = document.getElementById("inventory");
        var a_inventory = document.getElementById("a_inventory");
        if(!inventory_status){
            inventory.style.display = "block";
            a_inventory.setAttribute("title", "close inventory");
            inventory_status=true;
        }
        else if(inventory_status){
            inventory.style.display = "none";
            a_inventory.setAttribute("title", "open inventory: view your items");
            inventory_status=false;
        }
    }
    // function to close path page (new tab)
    function path_display() {
        var path = document.getElementById("path");
        var a_path = document.getElementById("a_path");
        if(!path_status){
            path.style.display = "block";
            a_path.setAttribute("title", "close traversal tree");
            path_status=true;
        }
        else if(path_status){
            path.style.display = "none";
            a_path.setAttribute("title", "view your traversal tree");
            path_status=false;
        }
    }
    // function to update HTML list
    function update_inventory() {
        // if this was the first item, replace the default text
        if($("ul li:first").text() == "nothing to see here"){
            // update DOM to override default text with item
            $("ul li:first").text(player.inventory[0]);
        }
        // if this was the nth item, append the it to the list
        else{
            // update DOM to display newly added item in list
            $("#array").append("<li>" + player.inventory[player.inventory.length - 1] + "</li>")
        }
    }
    // function to add to inventory JS object data
    function add_inventory(item) {
        // add item to player inventory
        player.inventory.push(item);
    }
    // function to update DOM money reference and title
    function update_money() {
        $("#money").text("$" + player.money.toString())
        document.getElementById("money").setAttribute("title", "current amount of money: $" + player.money.toString())
    }
    // function to add money to player object data
    function add_money(amount) {
        // add item to player inventory
        player.money += amount;
    }
    // function to handle branching left. LEFT IS FALSE
    function left(){
        if(player.level < 5){
        left_count++;
        level_up();
        curr_ending.push(false)
        //console.log(curr_ending[player.level-1])
        }
        else{
            left_count++;
            level_up();
            curr_ending.push(false)
            //console.log(curr_ending[player.level-1])
            document.getElementById("end").style.display = "block";
            document.getElementById("left").style.display = "none";
            document.getElementById("right").style.display = "none";
        }
        update_path();
    }
    // function to handle branching right. RIGHT IS TRUE
    function right(){
        if(player.level < 5){
        right_count++;
        level_up();
        curr_ending.push(true)
        //console.log(curr_ending[player.level-1])
        }
        else{
            right_count++;
            level_up();
            curr_ending.push(true)
            //console.log(curr_ending[player.level-1])
            document.getElementById("end").style.display = "block";
            document.getElementById("left").style.display = "none";
            document.getElementById("right").style.display = "none";
        }
        update_path();
    }
    // function to increase level
    function level_up(){
        // increment player object level data
        player.level++;
        // update DOM HTML progress bar (and title)
        document.getElementById("progress").setAttribute("value", player.level.toString());
        document.getElementById("progress").setAttribute("title", "level "+(player.level + 1).toString()+": click to restart");
        document.getElementById("a_progress").setAttribute("title", "level "+(player.level + 1).toString()+": click to restart");
    }
    function update_path(){
        /* left subtree */
        // f,
        if(player.level==1 && curr_ending[0]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l1.png");
        }
        /* outer-left subtree */
        // f,f
        if(player.level==2 && curr_ending[0]==false && curr_ending[1]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l2.png");
        }
        // f,f,f
        if(player.level==3 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l3.png");
        }
        // f,f,f,f
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l4.png");
        }
        // f,f,f,f,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l5.png");
        }
        // f,f,f,f,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l6.png");
        }
        // f,f,f,f,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l7.png");
        }
        // f,f,f,f,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l8.png");
        }
        // f,f,f,f,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l9.png");
        }
        // f,f,f,f,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l10.png");
        }
        // f,f,f,t
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l11.png");
        }
        // f,f,f,t,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l12.png");
        }
        // f,f,f,t,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l13.png");
        }
        // f,f,f,t,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l14.png");
        }
        // f,f,f,t,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l15.png");
        }
        // f,f,f,t,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l16.png");
        }
        // f,f,f,t,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l17.png");
        }
        // f,f,t
        if(player.level==3 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l18.png");
        }
        // f,f,t,f
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l19.png");
        }
        // f,f,t,f,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l20.png");
        }
        // f,f,t,f,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l21.png");
        }
        // f,f,t,f,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l22.png");
        }
        // f,f,t,f,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l23.png");
        }
        // f,f,t,f,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l24.png");
        }
        // f,f,t,f,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l25.png");
        }
        // f,f,t,t
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l26.png");
        }
        // f,f,t,t,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l27.png");
        }
        // f,f,t,t,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l28.png");
        }
        // f,f,t,t,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l29.png");
        }
        // f,f,t,t,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l30.png");
        }
        // f,f,t,t,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l31.png");
        }
        // f,f,t,t,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l32.png");
        }
        /* inner-left subtree */
        // f,t
        if(player.level==2 && curr_ending[0]==false && curr_ending[1]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l33.png");
        }
        // f,t,f
        if(player.level==3 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l34.png");
        }
        // f,t,f,f
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l35.png");
        }
        // f,t,f,f,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l36.png");
        }
        // f,t,f,f,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l37.png");
        }
        // f,t,f,f,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l38.png");
        }
        // f,t,f,f,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l39.png");
        }
        // f,t,f,f,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l40.png");
        }
        // f,t,f,f,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l41.png");
        }
        // f,t,f,t
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l42.png");
        }
        // f,t,f,t,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l43.png");
        }
        // f,t,f,t,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l44.png");
        }
        // f,t,f,t,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l45.png");
        }
        // f,t,f,t,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l46.png");
        }
        // f,t,f,t,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l47.png");
        }
        // f,t,f,t,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l48.png");
        }
        // f,t,t
        if(player.level==3 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l49.png");
        }
        // f,t,t,f
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l50.png");
        }
        // f,t,t,f,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l51.png");
        }
        // f,t,t,f,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l52.png");
        }
        // f,t,t,f,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l53.png");
        }
        // f,t,t,f,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l54.png");
        }
        // f,t,t,f,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l55.png");
        }
        // f,t,t,f,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l56.png");
        }
        // f,t,t,t
        if(player.level==4 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l57.png");
        }
        // f,t,t,t,f
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l58.png");
        }
        // f,t,t,t,f,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l59.png");
        }
        // f,t,t,t,f,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l60.png");
        }
        // f,t,t,t,t
        if(player.level==5 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l61.png");
        }
        // f,t,t,t,t,f
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l62.png");
        }
        // f,t,t,t,t,t
        if(player.level==6 && curr_ending[0]==false && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l63.png");
        }
        /* right subtree */
        // t,
        if(player.level==1 && curr_ending[0]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l64.png");
        }
        /* inner-right subtree */
        // t,f
        if(player.level==2 && curr_ending[0]==true && curr_ending[1]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l65.png");
        }
        // t,f,f
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l66.png");
        }
        // t,f,f,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l67.png");
        }
        // t,f,f,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l68.png");
        }
        // t,f,f,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l69.png");
        }
        // t,f,f,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l70.png");
        }
        // t,f,f,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l71.png");
        }
        // t,f,f,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l72.png");
        }
        // t,f,f,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l73.png");
        }
        // t,f,f,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l74.png");
        }
        // t,f,f,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l75.png");
        }
        // t,f,f,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l76.png");
        }
        // t,f,f,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l77.png");
        }
        // t,f,f,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l78.png");
        }
        // t,f,f,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l79.png");
        }
        // t,f,f,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l80.png");
        }
        // t,f,t
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l81.png");
        }
        // t,f,t,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l82.png");
        }
        // t,f,t,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l83.png");
        }
        // t,f,t,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l84.png");
        }
        // t,f,t,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l85.png");
        }
        // t,f,t,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l86.png");
        }
        // t,f,t,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l87.png");
        }
        // t,f,t,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l88.png");
        }
        // t,f,t,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l89.png");
        }
        // t,f,t,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l90.png");
        }
        // t,f,t,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l91.png");
        }
        // t,f,t,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l92.png");
        }
        // t,f,t,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l93.png");
        }
        // t,f,t,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l94.png");
        }
        // t,f,t,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l95.png");
        }
        /* outer-right subtree */
        // t,t
        if(player.level==2 && curr_ending[0]==true && curr_ending[1]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l96.png");
        }
        // t,t,f
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l97.png");
        }
        // t,t,f,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l98.png");
        }
        // t,t,f,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l99.png");
        }
        // t,t,f,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l100.png");
        }
        // t,t,f,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l101.png");
        }
        // t,t,f,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l102.png");
        }
        // t,t,f,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l103.png");
        }
        // t,t,f,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l104.png");
        }
        // t,t,f,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l105.png");
        }
        // t,t,f,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l106.png");
        }
        // t,t,f,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l107.png");
        }
        // t,t,f,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l108.png");
        }
        // t,t,f,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l109.png");
        }
        // t,t,f,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l110.png");
        }
        // t,t,f,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l111.png");
        }
        // t,t,t
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l112.png");
        }
        // t,t,t,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l113.png");
        }
        // t,t,t,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l114.png");
        }
        // t,t,t,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l115.png");
        }
        // t,t,t,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l116.png");
        }
        // t,t,t,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l117.png");
        }
        // t,t,t,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l118.png");
        }
        // t,t,t,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l119.png");
        }
        // t,t,t,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l120.png");
        }
        // t,t,t,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l121.png");
        }
        // t,t,t,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l122.png");
        }
        // t,t,t,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l123.png");
        }
        // t,t,t,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l124.png");
        }
        // t,t,t,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/l125.png");
        }
        // t,t,t,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/l126.png");
        }
    }
    // function to determine ending
    function end(){
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e1[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 1
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e2[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 2
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e3[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 3
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e4[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 4
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e5[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 5
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e6[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 6
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e7[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 7
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e8[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 8
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e9[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 9
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e10[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 10
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e11[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 11
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e12[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 12
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e13[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 13
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e14[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 14
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e15[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 15
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e16[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 16
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e17[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 17
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e18[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 18
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e19[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 19
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e20[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 20
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e21[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 21
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e22[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 22
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e23[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 23
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e24[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 24
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e25[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 25
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e26[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 26
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e27[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 27
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e28[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 28
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e29[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 29
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e30[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 30
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e31[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 31
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e32[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 32
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e33[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 33
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e34[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 34
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e35[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 35
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e36[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 36
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e37[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 37
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e38[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 38
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e39[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 39
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e40[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 40
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e41[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 41
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e42[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 42
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e43[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 43
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e44[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 44
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e45[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 45
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e46[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 46
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e47[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 47
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e48[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 48
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e49[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 49
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e50[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 50
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e51[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 51
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e52[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 52
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e53[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 53
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e54[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 54
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e55[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 55
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e56[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 56
        }

        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e57[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 57
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e58[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 58
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e59[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 59
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e60[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 60
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e61[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 61
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e62[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 62
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e63[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 63
        }
        if(function(){
            for(i=0;i<player.level; i++){
                if(curr_ending[i]!=e64[i]){
                    return false;
                }
            }
            return true;
        }){
            // ending 64
            console.log("64")
        }
    }
    //---------------------------------------------------------------------------------------------------//
    //-------------------------------------------start game----------------------------------------------//
    // create player
    var player = new Model(10, [], -1);
    // initialize starting values
    update_money();
    level_up();
    //---------------------------------------------------------------------------------------------------//
}