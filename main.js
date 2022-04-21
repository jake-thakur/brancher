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
var endings_status = false;
var curr_ending = [];
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
    _("a_endings").onclick = endings_display;
    _("a_progress").onclick = soft_reset;
    _("restart").onclick = soft_reset;
    _("quit").onclick = quit;
    _("left").onclick = left;
    _("end").onclick = end;
    _("right").onclick = right;

    /* function declarations */
    // function to expand and collapse inventory (HTML)
    function quit(){
        close();
        window.location.href = "index.html";
    }
    function soft_reset() {
        player.money = 10;
        player.inventory = ["nothing to see here"];
        player.level = -1;
        curr_ending = [];
        level_up();
        document.getElementById("story").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus";
        document.getElementById("prompt").innerHTML = "lorem ipsum";
        document.getElementById("left").style.display = "inline";
        document.getElementById("quit").style.display = "none";
        document.getElementById("end").style.display = "none";
        document.getElementById("right").style.display = "inline";
        document.getElementById("restart").style.display = "none";
        document.getElementById("path").setAttribute("src", "images/brancher.png");
    }
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
    function endings_display() {
        var endings = document.getElementById("endings_list");
        if(!endings_status){
            endings.style.display = "block";
            document.getElementById("a_endings").setAttribute("title", "close list of endings");
            endings_status=true;
        }
        else if(endings_status){
            endings.style.display = "none";
            document.getElementById("a_endings").setAttribute("title", "open list of endings");
            endings_status=false;
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
        level_up();
        curr_ending.push(false)
        //console.log(curr_ending[player.level-1])
        }
        else{
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
        level_up();
        curr_ending.push(true)
        //console.log(curr_ending[player.level-1])
        }
        else{
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
            document.getElementById("path").setAttribute("src", "images/paths/r1.png");
        }
        /* inner-right subtree */
        // t,f
        if(player.level==2 && curr_ending[0]==true && curr_ending[1]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r2.png");
        }
        // t,f,f
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r3.png");
        }
        // t,f,f,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r4.png");
        }
        // t,f,f,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r5.png");
        }
        // t,f,f,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r6.png");
        }
        // t,f,f,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r7.png");
        }
        // t,f,f,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r8.png");
        }
        // t,f,f,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r9.png");
        }
        // t,f,f,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r10.png");
        }
        // t,f,f,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r11.png");
        }
        // t,f,f,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r12.png");
        }
        // t,f,f,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r13.png");
        }
        // t,f,f,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r14.png");
        }
        // t,f,f,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r15.png");
        }
        // t,f,f,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r16.png");
        }
        // t,f,f,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r17.png");
        }
        // t,f,t
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r18.png");
        }
        // t,f,t,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r19.png");
        }
        // t,f,t,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r20.png");
        }
        // t,f,t,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r21.png");
        }
        // t,f,t,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r22.png");
        }
        // t,f,t,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r23.png");
        }
        // t,f,t,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r24.png");
        }
        // t,f,t,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r25.png");
        }
        // t,f,t,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r26.png");
        }
        // t,f,t,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r27.png");
        }
        // t,f,t,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r28.png");
        }
        // t,f,t,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r29.png");
        }
        // t,f,t,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r30.png");
        }
        // t,f,t,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r31.png");
        }
        // t,f,t,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==false && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r32.png");
        }
        /* outer-right subtree */
        // t,t
        if(player.level==2 && curr_ending[0]==true && curr_ending[1]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r33.png");
        }
        // t,t,f
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r34.png");
        }
        // t,t,f,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r35.png");
        }
        // t,t,f,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r36.png");
        }
        // t,t,f,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r37.png");
        }
        // t,t,f,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r38.png");
        }
        // t,t,f,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r39.png");
        }
        // t,t,f,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r40.png");
        }
        // t,t,f,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r41.png");
        }
        // t,t,f,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r42.png");
        }
        // t,t,f,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r43.png");
        }
        // t,t,f,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r44.png");
        }
        // t,t,f,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r45.png");
        }
        // t,t,f,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r46.png");
        }
        // t,t,f,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r47.png");
        }
        // t,t,f,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==false && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r48.png");
        }
        // t,t,t
        if(player.level==3 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r49.png");
        }
        // t,t,t,f
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r50.png");
        }
        // t,t,t,f,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r51.png");
        }
        // t,t,t,f,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r52.png");
        }
        // t,t,t,f,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r53.png");
        }
        // t,t,t,f,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r54.png");
        }
        // t,t,t,f,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r55.png");
        }
        // t,t,t,f,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==false && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r56.png");
        }
        // t,t,t,t
        if(player.level==4 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r57.png");
        }
        // t,t,t,t,f
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r58.png");
        }
        // t,t,t,t,f,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r59.png");
        }
        // t,t,t,t,f,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==false && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r60.png");
        }
        // t,t,t,t,t
        if(player.level==5 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r61.png");
        }
        // t,t,t,t,t,f
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==false){
            document.getElementById("path").setAttribute("src", "images/paths/r62.png");
        }
        // t,t,t,t,t,t
        if(player.level==6 && curr_ending[0]==true && curr_ending[1]==true && curr_ending[2]==true && curr_ending[3]==true && curr_ending[4]==true && curr_ending[5]==true){
            document.getElementById("path").setAttribute("src", "images/paths/r63.png");
        }
    }
    // function to determine ending
    function end(){
        document.getElementById("end").style.display = "none";
        document.getElementById("quit").style.display = "inline";
        document.getElementById("restart").style.display = "inline";
        if(player.level==6 && curr_ending[0]==e1[0] && curr_ending[1]==e1[1] && curr_ending[2]==e1[2] && curr_ending[3]==e1[3] && curr_ending[4]==e1[4] && curr_ending[5]==e1[5]){
            // ending 1
            document.getElementById("e1").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #1: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e2[0] && curr_ending[1]==e2[1] && curr_ending[2]==e2[2] && curr_ending[3]==e2[3] && curr_ending[4]==e2[4] && curr_ending[5]==e2[5]){
            // ending 2
            document.getElementById("e2").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #2: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e3[0] && curr_ending[1]==e3[1] && curr_ending[2]==e3[2] && curr_ending[3]==e3[3] && curr_ending[4]==e3[4] && curr_ending[5]==e3[5]){
            // ending 3
            document.getElementById("e3").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #3: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e4[0] && curr_ending[1]==e4[1] && curr_ending[2]==e4[2] && curr_ending[3]==e4[3] && curr_ending[4]==e4[4] && curr_ending[5]==e4[5]){
            // ending 4
            document.getElementById("e4").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #4: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e5[0] && curr_ending[1]==e5[1] && curr_ending[2]==e5[2] && curr_ending[3]==e5[3] && curr_ending[4]==e5[4] && curr_ending[5]==e5[5]){
            // ending 5
            document.getElementById("e5").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #5: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e6[0] && curr_ending[1]==e6[1] && curr_ending[2]==e6[2] && curr_ending[3]==e6[3] && curr_ending[4]==e6[4] && curr_ending[5]==e6[5]){
            // ending 6
            document.getElementById("e6").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #6: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e7[0] && curr_ending[1]==e7[1] && curr_ending[2]==e7[2] && curr_ending[3]==e7[3] && curr_ending[4]==e7[4] && curr_ending[5]==e7[5]){
            // ending 7
            document.getElementById("e7").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #7: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e8[0] && curr_ending[1]==e8[1] && curr_ending[2]==e8[2] && curr_ending[3]==e8[3] && curr_ending[4]==e8[4] && curr_ending[5]==e8[5]){
            // ending 8
            document.getElementById("e8").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #8: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e9[0] && curr_ending[1]==e9[1] && curr_ending[2]==e9[2] && curr_ending[3]==e9[3] && curr_ending[4]==e9[4] && curr_ending[5]==e9[5]){
            // ending 9
            document.getElementById("e9").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #9: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e10[0] && curr_ending[1]==e10[1] && curr_ending[2]==e10[2] && curr_ending[3]==e10[3] && curr_ending[4]==e10[4] && curr_ending[5]==e10[5]){
            // ending 10
            document.getElementById("e10").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #10: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e11[0] && curr_ending[1]==e11[1] && curr_ending[2]==e11[2] && curr_ending[3]==e11[3] && curr_ending[4]==e11[4] && curr_ending[5]==e11[5]){
            // ending 11
            document.getElementById("e11").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #11: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e12[0] && curr_ending[1]==e12[1] && curr_ending[2]==e12[2] && curr_ending[3]==e12[3] && curr_ending[4]==e12[4] && curr_ending[5]==e12[5]){
            // ending 12
            document.getElementById("e12").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #12: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e13[0] && curr_ending[1]==e13[1] && curr_ending[2]==e13[2] && curr_ending[3]==e13[3] && curr_ending[4]==e13[4] && curr_ending[5]==e13[5]){
            // ending 13
            document.getElementById("e13").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #13: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e14[0] && curr_ending[1]==e14[1] && curr_ending[2]==e14[2] && curr_ending[3]==e14[3] && curr_ending[4]==e14[4] && curr_ending[5]==e14[5]){
            // ending 14
            document.getElementById("e14").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #14: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e15[0] && curr_ending[1]==e15[1] && curr_ending[2]==e15[2] && curr_ending[3]==e15[3] && curr_ending[4]==e15[4] && curr_ending[5]==e15[5]){
            // ending 15
            document.getElementById("e15").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #15: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e16[0] && curr_ending[1]==e16[1] && curr_ending[2]==e16[2] && curr_ending[3]==e16[3] && curr_ending[4]==e16[4] && curr_ending[5]==e16[5]){
            // ending 16
            document.getElementById("e16").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #16: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e17[0] && curr_ending[1]==e17[1] && curr_ending[2]==e17[2] && curr_ending[3]==e17[3] && curr_ending[4]==e17[4] && curr_ending[5]==e17[5]){
            // ending 17
            document.getElementById("e17").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #17: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e18[0] && curr_ending[1]==e18[1] && curr_ending[2]==e18[2] && curr_ending[3]==e18[3] && curr_ending[4]==e18[4] && curr_ending[5]==e18[5]){
            // ending 18
            document.getElementById("e18").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #18: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e19[0] && curr_ending[1]==e19[1] && curr_ending[2]==e19[2] && curr_ending[3]==e19[3] && curr_ending[4]==e19[4] && curr_ending[5]==e19[5]){
            // ending 19
            document.getElementById("e19").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #19: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e20[0] && curr_ending[1]==e20[1] && curr_ending[2]==e20[2] && curr_ending[3]==e20[3] && curr_ending[4]==e20[4] && curr_ending[5]==e20[5]){
            // ending 20
            document.getElementById("e20").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #20: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e21[0] && curr_ending[1]==e21[1] && curr_ending[2]==e21[2] && curr_ending[3]==e21[3] && curr_ending[4]==e21[4] && curr_ending[5]==e21[5]){
            // ending 21
            document.getElementById("e21").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #21: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e22[0] && curr_ending[1]==e22[1] && curr_ending[2]==e22[2] && curr_ending[3]==e22[3] && curr_ending[4]==e22[4] && curr_ending[5]==e22[5]){
            // ending 22
            document.getElementById("e22").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #22: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e23[0] && curr_ending[1]==e23[1] && curr_ending[2]==e23[2] && curr_ending[3]==e23[3] && curr_ending[4]==e23[4] && curr_ending[5]==e23[5]){
            // ending 23
            document.getElementById("e23").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #23: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e24[0] && curr_ending[1]==e24[1] && curr_ending[2]==e24[2] && curr_ending[3]==e24[3] && curr_ending[4]==e24[4] && curr_ending[5]==e24[5]){
            // ending 24
            document.getElementById("e24").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #24: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e25[0] && curr_ending[1]==e25[1] && curr_ending[2]==e25[2] && curr_ending[3]==e25[3] && curr_ending[4]==e25[4] && curr_ending[5]==e25[5]){
            // ending 25
            document.getElementById("e25").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #25: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e26[0] && curr_ending[1]==e26[1] && curr_ending[2]==e26[2] && curr_ending[3]==e26[3] && curr_ending[4]==e26[4] && curr_ending[5]==e26[5]){
            // ending 26
            document.getElementById("e26").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #26: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e27[0] && curr_ending[1]==e27[1] && curr_ending[2]==e27[2] && curr_ending[3]==e27[3] && curr_ending[4]==e27[4] && curr_ending[5]==e27[5]){
            // ending 27
            document.getElementById("e27").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #27: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e28[0] && curr_ending[1]==e28[1] && curr_ending[2]==e28[2] && curr_ending[3]==e28[3] && curr_ending[4]==e28[4] && curr_ending[5]==e28[5]){
            // ending 28
            document.getElementById("e28").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #28: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e29[0] && curr_ending[1]==e29[1] && curr_ending[2]==e29[2] && curr_ending[3]==e29[3] && curr_ending[4]==e29[4] && curr_ending[5]==e29[5]){
            // ending 29
            document.getElementById("e29").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #29: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e30[0] && curr_ending[1]==e30[1] && curr_ending[2]==e30[2] && curr_ending[3]==e30[3] && curr_ending[4]==e30[4] && curr_ending[5]==e30[5]){
            // ending 30
            document.getElementById("e30").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #30: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e31[0] && curr_ending[1]==e31[1] && curr_ending[2]==e31[2] && curr_ending[3]==e31[3] && curr_ending[4]==e31[4] && curr_ending[5]==e31[5]){
            // ending 31
            document.getElementById("e31").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #31: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e32[0] && curr_ending[1]==e32[1] && curr_ending[2]==e32[2] && curr_ending[3]==e32[3] && curr_ending[4]==e32[4] && curr_ending[5]==e32[5]){
            // ending 32
            document.getElementById("e32").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #32: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e33[0] && curr_ending[1]==e33[1] && curr_ending[2]==e33[2] && curr_ending[3]==e33[3] && curr_ending[4]==e33[4] && curr_ending[5]==e33[5]){
            // ending 33
            document.getElementById("e33").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #33: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e34[0] && curr_ending[1]==e34[1] && curr_ending[2]==e34[2] && curr_ending[3]==e34[3] && curr_ending[4]==e34[4] && curr_ending[5]==e34[5]){
            // ending 34
            document.getElementById("e34").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #34: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e35[0] && curr_ending[1]==e35[1] && curr_ending[2]==e35[2] && curr_ending[3]==e35[3] && curr_ending[4]==e35[4] && curr_ending[5]==e35[5]){
            // ending 35
            document.getElementById("e35").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #35: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e36[0] && curr_ending[1]==e36[1] && curr_ending[2]==e36[2] && curr_ending[3]==e36[3] && curr_ending[4]==e36[4] && curr_ending[5]==e36[5]){
            // ending 36
            document.getElementById("e36").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #36: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e37[0] && curr_ending[1]==e37[1] && curr_ending[2]==e37[2] && curr_ending[3]==e37[3] && curr_ending[4]==e37[4] && curr_ending[5]==e37[5]){
            // ending 37
            document.getElementById("e37").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #37: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e38[0] && curr_ending[1]==e38[1] && curr_ending[2]==e38[2] && curr_ending[3]==e38[3] && curr_ending[4]==e38[4] && curr_ending[5]==e38[5]){
            // ending 38
            document.getElementById("e38").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #38: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e39[0] && curr_ending[1]==e39[1] && curr_ending[2]==e39[2] && curr_ending[3]==e39[3] && curr_ending[4]==e39[4] && curr_ending[5]==e39[5]){
            // ending 39
            document.getElementById("e39").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #39: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e40[0] && curr_ending[1]==e40[1] && curr_ending[2]==e40[2] && curr_ending[3]==e40[3] && curr_ending[4]==e40[4] && curr_ending[5]==e40[5]){
            // ending 40
            document.getElementById("e40").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #40: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e41[0] && curr_ending[1]==e41[1] && curr_ending[2]==e41[2] && curr_ending[3]==e41[3] && curr_ending[4]==e41[4] && curr_ending[5]==e41[5]){
            // ending 41
            document.getElementById("e41").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #41: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e42[0] && curr_ending[1]==e42[1] && curr_ending[2]==e42[2] && curr_ending[3]==e42[3] && curr_ending[4]==e42[4] && curr_ending[5]==e42[5]){
            // ending 42
            document.getElementById("e42").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #42: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e43[0] && curr_ending[1]==e43[1] && curr_ending[2]==e43[2] && curr_ending[3]==e43[3] && curr_ending[4]==e43[4] && curr_ending[5]==e43[5]){
            // ending 43
            document.getElementById("e43").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #43: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e44[0] && curr_ending[1]==e44[1] && curr_ending[2]==e44[2] && curr_ending[3]==e44[3] && curr_ending[4]==e44[4] && curr_ending[5]==e44[5]){
            // ending 44
            document.getElementById("e44").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #44: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e45[0] && curr_ending[1]==e45[1] && curr_ending[2]==e45[2] && curr_ending[3]==e45[3] && curr_ending[4]==e45[4] && curr_ending[5]==e45[5]){
            // ending 45
            document.getElementById("e45").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #45: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e46[0] && curr_ending[1]==e46[1] && curr_ending[2]==e46[2] && curr_ending[3]==e46[3] && curr_ending[4]==e46[4] && curr_ending[5]==e46[5]){
            // ending 46
            document.getElementById("e46").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #46: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e47[0] && curr_ending[1]==e47[1] && curr_ending[2]==e47[2] && curr_ending[3]==e47[3] && curr_ending[4]==e47[4] && curr_ending[5]==e47[5]){
            // ending 47
            document.getElementById("e47").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #47: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e48[0] && curr_ending[1]==e48[1] && curr_ending[2]==e48[2] && curr_ending[3]==e48[3] && curr_ending[4]==e48[4] && curr_ending[5]==e48[5]){
            // ending 48
            document.getElementById("e48").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #48: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e49[0] && curr_ending[1]==e49[1] && curr_ending[2]==e49[2] && curr_ending[3]==e49[3] && curr_ending[4]==e49[4] && curr_ending[5]==e49[5]){
            // ending 49
            document.getElementById("e49").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #49: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e50[0] && curr_ending[1]==e50[1] && curr_ending[2]==e50[2] && curr_ending[3]==e50[3] && curr_ending[4]==e50[4] && curr_ending[5]==e50[5]){
            // ending 50
            document.getElementById("e50").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #50: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e51[0] && curr_ending[1]==e51[1] && curr_ending[2]==e51[2] && curr_ending[3]==e51[3] && curr_ending[4]==e51[4] && curr_ending[5]==e51[5]){
            // ending 51
            document.getElementById("e51").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #51: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e52[0] && curr_ending[1]==e52[1] && curr_ending[2]==e52[2] && curr_ending[3]==e52[3] && curr_ending[4]==e52[4] && curr_ending[5]==e52[5]){
            // ending 52
            document.getElementById("e52").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #52: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e53[0] && curr_ending[1]==e53[1] && curr_ending[2]==e53[2] && curr_ending[3]==e53[3] && curr_ending[4]==e53[4] && curr_ending[5]==e53[5]){
            // ending 53
            document.getElementById("e53").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #53: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e54[0] && curr_ending[1]==e54[1] && curr_ending[2]==e54[2] && curr_ending[3]==e54[3] && curr_ending[4]==e54[4] && curr_ending[5]==e54[5]){
            // ending 54
            document.getElementById("e54").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #54: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e55[0] && curr_ending[1]==e55[1] && curr_ending[2]==e55[2] && curr_ending[3]==e55[3] && curr_ending[4]==e55[4] && curr_ending[5]==e55[5]){
            // ending 55
            document.getElementById("e55").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #55: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e56[0] && curr_ending[1]==e56[1] && curr_ending[2]==e56[2] && curr_ending[3]==e56[3] && curr_ending[4]==e56[4] && curr_ending[5]==e56[5]){
            // ending 56
            document.getElementById("e56").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #56: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e57[0] && curr_ending[1]==e57[1] && curr_ending[2]==e57[2] && curr_ending[3]==e57[3] && curr_ending[4]==e57[4] && curr_ending[5]==e57[5]){
            // ending 57
            document.getElementById("e57").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #57: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e58[0] && curr_ending[1]==e58[1] && curr_ending[2]==e58[2] && curr_ending[3]==e58[3] && curr_ending[4]==e58[4] && curr_ending[5]==e58[5]){
            // ending 58
            document.getElementById("e58").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #58: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e59[0] && curr_ending[1]==e59[1] && curr_ending[2]==e59[2] && curr_ending[3]==e59[3] && curr_ending[4]==e59[4] && curr_ending[5]==e59[5]){
            // ending 59
            document.getElementById("e59").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #59: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e60[0] && curr_ending[1]==e60[1] && curr_ending[2]==e60[2] && curr_ending[3]==e60[3] && curr_ending[4]==e60[4] && curr_ending[5]==e60[5]){
            // ending 60
            document.getElementById("e60").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #60: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e61[0] && curr_ending[1]==e61[1] && curr_ending[2]==e61[2] && curr_ending[3]==e61[3] && curr_ending[4]==e61[4] && curr_ending[5]==e61[5]){
            // ending 61
            document.getElementById("e61").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #61: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e62[0] && curr_ending[1]==e62[1] && curr_ending[2]==e62[2] && curr_ending[3]==e62[3] && curr_ending[4]==e62[4] && curr_ending[5]==e62[5]){
            // ending 62
            document.getElementById("e62").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #62: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e63[0] && curr_ending[1]==e63[1] && curr_ending[2]==e63[2] && curr_ending[3]==e63[3] && curr_ending[4]==e63[4] && curr_ending[5]==e63[5]){
            // ending 63
            document.getElementById("e63").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #63: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
        }
        if(player.level==6 && curr_ending[0]==e64[0] && curr_ending[1]==e64[1] && curr_ending[2]==e64[2] && curr_ending[3]==e64[3] && curr_ending[4]==e64[4] && curr_ending[5]==e64[5]){
            // ending 64
            document.getElementById("e64").setAttribute("class","enabled");
            document.getElementById("story").innerHTML = "ending #64: "
            document.getElementById("prompt").innerHTML = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus"
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