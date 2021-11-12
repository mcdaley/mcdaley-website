---
title:        "Does your website really need to handle 10,000 requests per minute?"
path:         "calculating-market-size"
date:         "2020-02-17"
cover:        "complicated-chalkboard.jpg"
description:  "Second blog post"
excerpt:      "Can you summarize your product’s strategy in 35 words or less? If yes, can your colleagues put it the same way? Organizations fail to appreciate the necessity of having a simple, clear, succinct strategy statement that everyone can internalize and use as a guiding light for making difficult product choices."
---

<div className="bg-white">
  <Image  src     = "/complicated-chalkboard.jpg" 
          alt     = "Does your website need to handle 10,000 requests per minute" 
          width   = {512}
          height  = {256} 
  />
</div>

After securing VC funding for your scooter rideshare company, you now have to build and launch your product as quickly as possible and within budget. Human tendency is to overestimate the number of users and the number of requests per minute that a new app/website must support.

When the expected traffic is overestimated then you typically fall into the trap of making the backend architecture too complicated because you think you need to handle >100 times more requests then the application will actually receive. Increasing the complexity of the server architecture dramatically increases the amount of development and testing needed to launch a site without providing any benefit to users. 

Taking the time in the beginning of the project to understand the expected requests per minute and the usage of the application can save months in development time. In this post we’ll look at a simple back of the envelope method to calculate the market size for a new product and we will determine if your app/website really needs to support 10,000 requests per second.

## Calculate Market Size for a New Product
We’ll work through an example market sizing exercise for your new electric scooter rideshare company launched in the US that already has a $1B valuation, so that we can estimate the average number of requests per minute that your app will need to handle over the first 2 to 4 years after your product launch.

We’ll calculate the market size and the number of requests per minute by: 
* Calculating the total potential market for the product
* Estimating the percentage of the market your product will capture
* Estimating the average use of the product.

### Calculate the Total Potential US Market
If you are launching a consumer online product then a quick way to calculate the total potential market size is to break the population into equal age buckets. For example, in the US we can estimate the population is 320M people and that there are equal number of people in 20 year age group buckets. We can then estimate the percentage of each group in the bucket that would use the product to get the total market size. Below is an example determining the market size for the electric scooter rideshare business.

<table  className="table-auto">
  <thead>
    <tr className="bg-blue-200 px-8">
      <th colSpan="4">
        <span className="p-4">Estimated Total Market for Electric Scooter Rentals</span>
      </th>
    </tr>
    <tr>
      <th className="text-center">&nbsp;&nbsp;Age&nbsp;&nbsp;</th>
      <th className="text-right">People</th>
      <th className="text-right">Percent</th>
      <th className="text-right"><span className="pr-4">Total Market</span></th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover px-4">
      <td className="text-center">0-20</td>
      <td className="text-right">80M</td>
      <td className="text-right">0.25</td>
      <td className="text-right"><span className="pr-4">20M</span></td>
    </tr>
    <tr>
      <td className="text-center">21-40</td>
      <td className="text-right">80M</td>
      <td className="text-right">0.80</td>
      <td className="text-right"><span className="pr-4">64M</span></td>
    </tr>
    <tr>
      <td className="text-center">41-60</td>
      <td className="text-right">80M</td>
      <td className="text-right">0.50</td>
      <td className="text-right"><span className="pr-4">40M</span></td>
    </tr>
    <tr>
      <td className="text-center">61-80</td>
      <td className="text-right">80M</td>
      <td className="text-right">0.10</td>
      <td className="text-right"><span className="pr-4">8M</span></td>
    </tr>
  </tbody>
  <tfoot>
    <tr className="bg-gray-300 font-bold">
      <td className="text-center"> Total </td>
      <td className="text-right" colSpan="3">
        <span className="pr-4">132M</span>
      </td>
    </tr>
  </tfoot>
</table>

In this example, the electric scooter rental market has a potential market of 132M people in the US and this will be the starting point for the calculation.

### Estimate the Percent of Market We Expect the Product to Capture
We’ll now estimate the percent of the scooter rideshare market that we expect to capture by looking at 3 factors: percent of people in US that live in urban areas, percent of market your competition will capture, and percent of people that will actually rent a scooter.

#### Percent of People in US that live in Urban Areas
We’ll assume that the scooter rideshare will only be viable in urban areas since scooter rides are expected to be short rides less than 2 miles. In the US, 80% of the population lives in an urban area.

#### Competition
There isn’t any proprietary technology stopping competition from entering the scooter rideshare business. The only barrier may be government regulation as San Francisco and Santa Monica have limited the number of companies with permits to operate. Let’s assume that there will be 3 companies in the scooter rideshare business and each company will have 33% of the market.

#### Percent of People that will Rent Scooters
Not everyone will want to rent a scooter. Some of the factors that will affect usage is fear of traffic/safety, lack of helmets, alternatives (e.g., bike, walking, or bus). Let’s estimate that 1 out of every 20 people or (5%) will rent scooters.

#### Summary of Market Share
The following table provides a quick summary of the estimated percent of the market that we expect to capture.

<table  className="table-auto">
  <thead>
    <tr className="bg-blue-200">
      <th className="text-left"><span className="pl-4">Factor</span></th>
      <th className="text-right">Percent</th>
      <th className="text-right"><span className="pr-4"> Decimal</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="pl-4">People in Urban Areas</span></td>
      <td className="text-right">80%</td>
      <td className="text-right"><span className="pr-4">0.80</span></td>
    </tr>
    <tr>
      <td><span className="pl-4">Competition</span></td>
      <td className="text-right">33%</td>
      <td className="text-right"><span className="pr-4">0.33</span></td>
    </tr>
    <tr>
      <td><span className="pl-4">People that will Rent Scooters</span></td>
      <td className="text-right">5%</td>
      <td className="text-right"><span className="pr-4">0.05</span></td>
    </tr>
  </tbody> 
</table>

#### Calculate the Product Market Size
Calculate the product market size by multiplying the total potential market and the percentages of the market that we estimated in the previous sections.

<table className="table-auto">
  <tbody>
    <tr>
      <td><span className="pl-4">=</span></td>
      <td>132M people * (0.80 urban) * (0.33 market share) * (0.05 will try scooter)</td>
    </tr>
    <tr className="bg-gray-300 font-bold">
      <td><span className="pl-4">=</span></td>
      <td>1.5M is the number of people we expect to use our scooter rideshare</td>
    </tr>
  </tbody>
</table>

### Estimate Expected Product Usage
The final step is to calculate the expected product usage so that we can calculate the number of rides per day and number of requests per minute by determining average user rental frequency and average number of server requests made per ride.

#### Average User Rental Frequency
On average, let’s assume that a user will rent a scooter once per month and now we can calculate the number of riders per day as shown below.

<table className="table-auto">
  <tbody>
    <tr>
      <td><span className="pl-4">=</span></td>
      <td>1.5M * (1 ride/month) * (1 month/30 days)</td>
    </tr>
    <tr className="bg-gray-300 font-bold">
      <td><span className="pl-4">=</span></td>
      <td>50,000 rides per day</td>
    </tr>
  </tbody>
</table>

#### Average Server Requests per Ride
The app will need to make multiple requests to the server during each ride and we can calculate the average number of requests made per ride, where a request is when the app makes a call to the server to rent/pickup scooter, provide gps coordinates, and dropping off scooter.

We’ll assume the average scooter ride is less than 2 miles and lasts less than 10 minutes. Also, the app will send updated coordinates of the scooter once every 30 seconds so that the server knows where the scooter is located. We can then calculate the average number of transactions per ride as shown below:

<table className="table-auto">
  <tbody>
    <tr>
      <td><span className="pl-4">=</span></td>
      <td> 
        <div className="flex flex-col">
          <span className="pb-2">(1 request at pickup) * </span>
          <span className="pb-2">[(1 gps request/30 seconds)*(600 sec/ride)] * </span>
          <span className="pb-2">22 requests per ride</span>
        </div>
      </td>
    </tr>
    <tr className="bg-gray-300 font-bold">
      <td><span className="pl-4">=</span></td>
      <td>22 requests per ride</td>
    </tr>
  </tbody>
</table>

#### Average Transactions per Second
We have now calculated that we’ll have 50,000 rides per day and that each ride makes 22 requests. We’ll also assume that people are only renting scooters during the day, so there will only be rentals from 8AM EST - 8PM PST or 15 hours per day. The following calculation will gives us the average number of requests per second your scooter rideshare product will need to support.

<table className="table-auto">
  <tbody>
    <tr>
      <td><span className="pl-4">=</span></td>
      <td>50,000 rides per day * (1 day/15 hours) * (22 requests/ride)</td>
    </tr>
    <tr>
      <td><span className="pl-4">=</span></td>
      <td>1,200 requests per minute * (1 hour/60 minutes)</td>
    </tr>
    <tr className="bg-gray-300 font-bold">
      <td><span className="pl-4">=</span></td>
      <td>20 requests per second</td>
    </tr>
  </tbody>
</table>

Our market sizing exercise has calculated that your scooter rideshare company will have to handles 1,200 requests per minute or 20 requests per second. Your app needs to handle a significant amount of requests per minute, but you are nowhere close to the amount of requests handled by Twitter and Facebook.

### Factors Not Considered
The example calculation is meant to be a quick back of the envelope sizing exercise to demonstrate that your site does not have to handle tens of thousands of requests per minute. We did not look at all of the factors as noted below:
* Expect bursts of traffic during the morning and evening commutes to/from work
* Expect more rides during the nice weather in the Summer
* Expected growth rate of the scooter rideshare market

## Conclusion
We all want our products to be super successful and with best intentions we tend to overestimate the number of requests are app will need to process. Especially when the articles we read about performance are typically for sites like Twitter and facebook that need to handle “tens of thousands of requests” per minute - so that becomes our baseline.

Our calculations show that even though your scooter company has a $1B valuation - you do not have to handle “tens of thousands of requests” per minute right now or in the foreseeable future. Using some basic math upfront when launching a new product has helped us determine the expected market for your product. In the majority of the cases, you’ll find that your expected number of users and transactions are significantly less than you originally thought. 

When you overestimate the number of requests per minute that your application needs to handle, you will tend to create over-complex architectures which dramatically increases your time to market by increasing the software development and testing time without providing any benefit to your users. You do not want to burn through your VC funding by building an over-complex application that does not help you meet your business objectives.

Having an estimate of your market size will guide you to define a system architecture for your product launch that will handle all of your traffic within expected response times and you will be able to launch your product faster and for less money - making your VCs happy. In the followup blog post, we’ll look at at creating a “Minimum Viable Architecture” for your scooter rideshare company based on the calculated market size and requests per minute.
