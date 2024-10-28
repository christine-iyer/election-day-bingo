
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# election-day-bingo

10/28/24 12pm
Next app is working in that it is saving data locally. 

After making some updates to the handscraped structured data set, namely anticipated time of announcement has been calculated. I still need to update the dataset. 

Parts of App:
Blank Map
* Blank map for predictions. This is a dynamic component where the user clicks on the state. They can select a winner and have a little section for notes. Text area and select button.

Historical Maps
* Reference 2016 and 2020 electoral maps. Animate maps on a time scale announcement time and  party color encodes the winner.
* D3 status components.

Live Map 
* Display a live electoral map encoding winner by color filling in the state.This is a dynamic map and will rely on user input for the Winner ( select), Date and Time (date picker) of announcement. 

Bingo
* Array of questions and each user gets dealt a unique hand. Dynamic component.


