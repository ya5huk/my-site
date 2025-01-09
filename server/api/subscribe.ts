// export default defineEventHandler(async (event) => {

//   const body = await readBody(event)
//   const mail = body.mail

//   const config = useRuntimeConfig();

//   const mjc = new Client({
//     apiKey: config.MAILJET_API_KEY,
//     apiSecret: config.MAILJET_API_SECRET
//   });

//   console.log(body)

//   const request = await mjc
//     .post('contact')
//     .request({
//       Email: mail,
//       IsExcludedFromCampaigns: true,
//       Name: mail
//     })

//   console.log(request)

//   return request.body

// })
