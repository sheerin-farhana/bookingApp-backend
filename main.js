
let itemList = document.getElementById('items');
        function onsignup(event){
            event.preventDefault();        
            let details_obj = {name:event.target.name.value,
                        email:event.target.email.value,
                        phone:event.target.phone.value.toString(),
                        }
            //let userdetails_obj = JSON.stringify(details_obj);
            //localStorage.setItem(event.target.name.value ,userdetails_obj );

            axios.post("https://crudcrud.com/api/53f18e8b61c94682aeb50395ac8e26f7/bookingData",details_obj)
            .then((response) => {
                console.log(response);
                let li = document.createElement('li');
                    let deleteButton = document.createElement('input');
                    deleteButton.type = "button"
                    deleteButton.id = "delete";
                    deleteButton.value = "DELETE";
                    //console.log(deleteButton);
                    let editButton = document.createElement('input');
                    editButton.type = "button"
                    editButton.id = "edit";
                    editButton.value = "Edit";
                    li.appendChild(document.createTextNode(response.data.name + " - "));
                    li.appendChild(document.createTextNode(response.data.email + " - "));
                    li.appendChild(document.createTextNode(response.data.phone ));
                    li.appendChild(deleteButton);
                    li.appendChild(editButton);
                    itemList.appendChild(li)
            })
            .catch((err) => {
                //console.log(err);
                document.body.innerHTML = document.body.innerHTML + "<h4>Something WENt Wrong</h4>";
            }) 

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            
            
        }
        

        

        window.addEventListener("DOMContentLoaded",()=>{
            axios.get("https://crudcrud.com/api/53f18e8b61c94682aeb50395ac8e26f7/bookingData")
            .then(response => {
                console.log(response.data);

                for(let i=0; i<response.data.length;i++){


                    let li = document.createElement('li');
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
                    li.appendChild(document.createTextNode(response.data[i].name + " - "));
                    li.appendChild(document.createTextNode(response.data[i].email + " - "));
                    li.appendChild(document.createTextNode(response.data[i].phone ));
                    li.appendChild(deleteButton);
                    li.appendChild(editButton);
                    itemList.appendChild(li)

                   
                    //li.className = "list-group-item"
                    //li.className = "bg-light"
                    
                    let keyValue = response.data.name;
                    function ondelete(e)
                    {
                        e.preventDefault();
                        let parentNode = e.target.parentNode;
                        parentNode.remove();
                        //let details = e.target
                        let dataID = `https://crudcrud.com/api/53f18e8b61c94682aeb50395ac8e26f7/bookingData/${response.data[i]._id}`;
            
                        axios.delete(dataID)
                        .then((r) =>{
                            alert("DATA DELETED !!!")
                        })
                        .catch(error => console.log(error));
                    }
                    editButton.addEventListener('click',onEdit);
                    let name = response.data[i].name
                    let email = response.data[i].email;
                    let phone = response.data[i].phone;
        function onEdit(e){
            e.preventDefault();
            let parentNode = e.target.parentNode;
            parentNode.remove();
            //let details = e.target
            //localStorage.removeItem(keyValue);
            document.getElementById('name').value = name;
            document.getElementById('email').value = email;
            document.getElementById('phone').value = phone;


            let dataID = `https://crudcrud.com/api/53f18e8b61c94682aeb50395ac8e26f7/bookingData/${response.data[i]._id}`;
            axios.delete(dataID)
            .then(response => {
                console.log(response);
                alert('DATA UPDATED')
            })


                   /* li.appendChild(document.createTextNode(response.data[i].name + " - "));
                    li.appendChild(document.createTextNode(response.data[i].email + " - "));
                    li.appendChild(document.createTextNode(response.data[i].phone ));
                    li.appendChild(deleteButton);
                    li.appendChild(editButton);
                    itemList.appendChild(li)*/
                }
            }
            })
            .catch(error => console.log(error));
        })