 const inputElement = document.getElementById('js-input');
          const addGuest = document.getElementById('js-addGuest');
          const guestList = document.getElementById('js-GuestList');

         addGuest.addEventListener('click',()=>
         {
          const guestName = inputElement.value;
          if(guestName.trim()!=='')
         {
          const listItem = document.createElement('li');
          listItem.textContent=guestName;
          listItem.classList.add('mystyled-list');
            
          //confirmation Button
          const confirmButton = document.createElement('button'); 
          confirmButton.textContent = 'Confirm';
          confirmButton.addEventListener('click',()=>
            {
              const isConfirmed = listItem.classList.toggle('confirmed');
              if (isConfirmed) {
                  confirmButton.textContent = '✓';
                        } else {
                   confirmButton.textContent = 'Confirm';
                     }
        })

        //Remove Button

        const removeButton =document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click',()=>
        {
          guestList.removeChild(listItem);
        }
      )

          listItem.append(confirmButton);
          listItem.append(removeButton);
          guestList.appendChild(listItem);
          inputElement.value="";
         }
         }
        )
     
