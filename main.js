
let itemList = document.getElementById('items');
        function onsignup(event){
            event.preventDefault();        
            let details_obj = {name:event.target.name.value,
                        email:event.target.email.value,
                        phone:event.target.phone.value.toString(),
                        }
            //let userdetails_obj = JSON.stringify(details_obj);
            //localStorage.setItem(event.target.name.value ,userdetails_obj );
            axios.post("https://crudcrud.com/api/d3833744c4ba4b649324e059604704ac/bookingData",details_obj)
            .then((response) => {
                console.log(response);
                
            })
            .catch((err) => {
                //console.log(err);
                document.body.innerHTML = document.body.innerHTML + "<h4>Something WENt Wrong</h4>";
            })  
        }
        
        window.addEventListener("DOMContentLoaded",()=>{
            axios.get("https://crudcrud.com/api/d3833744c4ba4b649324e059604704ac/bookingData")
            .then(response => {
                //console.log(response.data);

                for(let i=0; i<response.data.length;i++){

                    let li = document.createElement('li');
                    //li.className = "list-group-item"
                    //li.className = "bg-light"
                    let deleteButton = document.createElement('input');
                    deleteButton.type = "button"
                    deleteButton.id = "delete";
                    deleteButton.value = "DELETE";
                    //console.log(deleteButton);
                    let editButton = document.createElement('input');
                    editButton.type = "button"
                    editButton.id = "edit";
                    editButton.value = "Edit";
                    deleteButton.addEventListener('click',ondelete);
                    let keyValue = response.data.name;
                    function ondelete(e){
                        e.preventDefault();
                        let parentNode = e.target.parentNode;
                        parentNode.remove();
                        //let details = e.target
                        localStorage.removeItem(keyValue);
                            }
                    editButton.addEventListener('click',onEdit);
                    let name = response.data.name
                    let email = response.data.email;
                    let phone = response.data.phone;
        function onEdit(e){
            e.preventDefault();
            let parentNode = e.target.parentNode;
            parentNode.remove();
            //let details = e.target
            localStorage.removeItem(keyValue);
            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
            document.getElementById('phone').value = phone;
        }



                    li.appendChild(document.createTextNode(response.data[i].name + " - "));
                    li.appendChild(document.createTextNode(response.data[i].email + " - "));
                    li.appendChild(document.createTextNode(response.data[i].phone ));
                    li.appendChild(deleteButton);
                    li.appendChild(editButton);
                    itemList.appendChild(li)
                }
            })
            .catch(error => console.log(error));
        })