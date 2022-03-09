const myForm = document.getElementById("formContact");

myForm.onsubmit = async(e) => {
  e.preventDefault();
  const params = new URLSearchParams([...new FormData(e.target).entries()]);
  fetch("/api/contact", {
    method: "POST",
    body: params
  });
  const response = await new Response(params).text();
  // CLIENT-SIDE REDIRECTION
  window.location.href = "/";
};