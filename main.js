function getFormData(){
    let a = document.getElementById("details");
    let b = document.getElementById("amount");

    const report = [
        localStorage.setItem("Details", a.value),
        localStorage.setItem("Amount", b.value)
    ]
    


}