
context("Login", () => {

  it('GET-read', ()=>{
         cy.request('GET', '/pet/234').then((response)=>{
          expect(response.body).have.property('status', 'available');
          expect(response.body).to.not.be.null
         })
     })
 it('POST-Create', ()=>{
         const item = {
             "id": 0,
             "petId": 0,
             "quantity": 0,
             "shipDate": "2021-11-21T10:37:22.684Z",
             "status": "placed",
             "complete": true
           }
         cy.request('POST', '/store/order', item).then((response)=>{
             expect(response.body).have.property('status', 'placed');
             expect(response.body).have.property('id', 9223372036854776000);
        })   
     });
 it('GET-read', ()=>{
         cy.request('GET', '/pet/findByStatus?status=available').then((response)=>{
              expect(response.body).to.not.be.null
         })
     })
 it('GET-read', ()=>{
         cy.request('GET', '/user/login?username=test&password=test').then((response)=>{
              expect(response.body).to.not.be.null
              expect(response.body).have.property('code',200);
           
         })
     }) 
 it('GET-read', ()=>{
         cy.request('GET', '/user/logout').then((response)=>{
              expect(response.body).to.not.be.null
              expect(response.body).have.property('code',200);
           
         })
     }) 
 });