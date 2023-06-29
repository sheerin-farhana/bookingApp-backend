let itemList = document.getElementById('items');
        function onsignup(event){
            event.preventDefault();
            let li = document.createElement('li');
            //li.className = "list-group-item";

            let deleteButton = document.createElement('input');
            deleteButton.type = "button"
            deleteButton.id = "delete";
            deleteButton.value = "DELETE";
            //console.log(deleteButton);
            let editButton = document.createElement('input');
            editButton.type = "button"
            editButton.id = "edit";
            editButton.value = "Edit";
            
            let details_obj = {name:event.target.name.value,
                        email:event.target.email.value,
                        phone:event.target.phone.value.toString(),
                        }
            
            //let userdetails_obj = JSON.stringify(details_obj);
            //localStorage.setItem(event.target.name.value ,userdetails_obj );

            axios.post("https://crudcrud.com/api/d3833744c4ba4b649324e059604704ac/bookingData",details_obj)
            .then((response) => {
                //console.log(response);
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



            /*li.appendChild(document.createTextNode(response.name.value + " - "));
            li.appendChild(document.createTextNode(response.target.email.value + " - "));
            li.appendChild(document.createTextNode(response.target.phone.value.toString() ));
            li.appendChild(deleteButton);
            li.appendChild(editButton);
            itemList.appendChild(li);*/
            


            //let deleteElement = document.getElementsByTagName('li').firstElementChild;
            //console.log(deleteElement);
            deleteButton.addEventListener('click',ondelete);
            let keyValue = event.target.name.value;
        

        function ondelete(e){
            e.preventDefault();
            let parentNode = e.target.parentNode;
            parentNode.remove();
            //let details = e.target
            localStorage.removeItem(keyValue);

        }

        editButton.addEventListener('click',onEdit);
        let name = event.target.name.value;
        let email = event.target.email.value;
        let phone = event.target.phone.value;


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




            /*console.log(event.target.name.value);
            console.log(event.target.email.value);
            console.log(event.target.phone.value);
            console.log(event.target.date.value);
            console.log(event.target.time.value);*/
        }
        





        const form =document.querySelector("form");
        form.addEventListener(submit , e =>{
            if(!form.checkValidity()){
                e.preventDefault();

            }
            form.classList.add('was-validated');
        })

        