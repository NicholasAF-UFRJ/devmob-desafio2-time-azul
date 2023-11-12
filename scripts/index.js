function redirecionarLink() {
    
    let selectedValue = document.getElementById("header-select").value;

    if (selectedValue) {
        window.location.href = selectedValue;
    }
}