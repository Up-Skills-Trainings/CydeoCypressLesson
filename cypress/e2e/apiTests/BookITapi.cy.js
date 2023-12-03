describe('Verify bookIT api responses', ()=>{
    it('verify a user information with access token from api', ()=>{
        cy.request({
            method: 'GET',
            url: 'https://api.qa3.bookit.cydeo.com/sign',
            qs: {
                email: "nsonger0@cmu.edu",
                password: "nilsonger"
            }
        }).then((tokenResponse) => {
            const token = tokenResponse.body.accessToken;
            cy.request({
                method : 'GET',
                url: 'https://api.qa3.bookit.cydeo.com/api/users/me',
                auth: {
                    'bearer' : token
                }
            }).then((userInfoResponse) => {
                cy.log(userInfoResponse);
                expect(userInfoResponse.body.firstName).to.equal('Nil');
                expect(userInfoResponse.status).to.equal(200);
                expect(userInfoResponse.headers.server).to.equal('envoy');
            })
        })
     })
})