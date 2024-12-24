window.addEventListener("message", (event) => {
    let e = event.data;

    if (e.action === "act") {
        if (e.health < 50) {
            $("#livskvalitet").addClass("lowHealth");
        } else {
            $("#livskvalitet").removeClass("lowHealth");
        }

        if (e.hunger < 50) {
            $("#mat").addClass("lowHunger");
        } else {
            $("#mat").removeClass("lowHunger");
        }

        if (e.thirst < 50) {
            $("#vatten").addClass("lowThirst");
        } else {
            $("#vatten").removeClass("lowThirst");
        }

        if (e.stamina < 50) {
            $("#uthållighet").addClass("lowStamina");
        } else {
            $("#uthållighet").removeClass("lowStamina");
        }

        if (e.oxygen < 50) {
            $("#oxygen").addClass("lowOxygen");
        } else {
            $("#oxygen").removeClass("lowOxygen");
        }

        $("#livskvalitet").css({"height": Math.round(e.health) + "%", "top": 100 - Math.round(e.health) + "%"});
        $("#mat").css({"height": Math.round(e.hunger) + "%", "top": 100 - Math.round(e.hunger) + "%"});
        $("#vatten").css({"height": Math.round(e.thirst) + "%", "top": 100 - Math.round(e.thirst) + "%"});
        $("#uthållighet").css({"height": Math.round(e.stamina) + "%", "top": 100 - Math.round(e.stamina) + "%"});
        $("#oxygen").css({"height": Math.round(e.oxygen) + "%", "top": 100 - Math.round(e.oxygen) + "%"});
        
        $("#uthållighet").css({"height": Math.round(e.stamina) + "%", "top": 100 - Math.round(e.stamina) + "%"});
        $('.sta').show(250);

        if (e.oxygen > -1 && e.oxygen < 95) {
            $('.ox').show(250);
        } else {
            $("#oxygen").css({"height": "0%", "top": "100%"});
            $('.ox').hide(250);
        }
    }
});
