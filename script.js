document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    chatbotContainer.classList.toggle('hidden');
    if (chatbotContainer.classList.contains('hidden')) {
        chatbotContainer.style.display = "none";
    } else {
        chatbotContainer.style.display = "flex";
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessage(userInput, 'user-message');

    document.getElementById('user-input').value = '';

    // Simulate AI response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
    }, 500);
}

function addMessage(text, className) {
    const message = document.createElement('div');
    message.className = `message ${className}`;
    message.textContent = text;
    document.getElementById('chat-output').appendChild(message);
    document.getElementById('chat-window').scrollTop = document.getElementById('chat-window').scrollHeight;
}

function getBotResponse(userInput) {
    // Large set of responses
    const responses = {
        'hii': 'Hello! How can I help you with your car rental today?',
        'hi': 'Hello! How can I help you with your car rental today?',
        'hello': 'Hi there! What can I do for you?',
        'how are you': 'I\'m just a bot, but I\'m here to help!',
        'bye': 'Goodbye! Have a great day!',
        'bye': 'Goodbye! Have a safe journey!',
        'what cars are available': 'We have a variety of cars available including sedans, SUVs, and luxury cars.',
        'how can i book a car': 'You can book a car through our website or by calling our customer service.',
        'what are the rental rates': 'Our rental rates start from $30 per day, depending on the car model and duration of the rental.',
        'what is the fuel policy': 'Our fuel policy requires you to return the car with the same fuel level as when you picked it up.',
        'can i modify my booking': 'Yes, you can modify your booking through our website or by contacting customer service.',
        'what is the cancellation policy': 'You can cancel your booking up to 24 hours before the pick-up time for a full refund.',
        'what documents are required': 'You will need a valid driver’s license, a credit card, and proof of insurance.',
        'do you offer insurance': 'Yes, we offer various insurance options to cover your rental.',
        'can i add an additional driver': 'Yes, you can add an additional driver for a small fee.',
        'what is the age requirement': 'The minimum age requirement to rent a car is 21 years old.',
        'are there any mileage limits': 'We offer both limited and unlimited mileage options. Please check the details at the time of booking.',
        'what if i return the car late': 'Late returns may incur additional charges. Please contact us if you anticipate a delay.',
        'where can i pick up the car': 'You can pick up the car from our rental locations listed on our website.',
        'how can i contact customer service': 'You can contact our customer service at (123) 456-7890 or via email at support@carrental.com.',
        'what payment methods are accepted': 'We accept credit cards, debit cards, and PayPal.',
        'can i rent a car for long term': 'Yes, we offer long-term rentals at discounted rates. Please contact us for more details.',
        'do you have luxury cars': 'Yes, we have a selection of luxury cars available for rent.',
        'what happens if the car breaks down': 'If the car breaks down, contact our roadside assistance team immediately for help.',
        'is there a deposit required': 'Yes, a refundable security deposit is required at the time of rental.',
        'can i rent a car for someone else': 'Yes, but the person driving the car must meet all rental requirements and be present to sign the rental agreement.',
        'what is your pet policy': 'Pets are allowed in our rental cars, but additional cleaning fees may apply.',
        'can i rent a gps': 'Yes, we offer GPS rentals for an additional fee.',
        'what is the procedure for extending the rental period': 'You can extend the rental period by contacting our customer service before your rental period ends.',
        'do you offer child seats': 'Yes, we offer child seats for rent. Please request one at the time of booking.',
        'how do i return the car': 'You can return the car to any of our rental locations during business hours.',
        'is there a fee for returning the car at a different location': 'Yes, there is a one-way fee for returning the car at a different location.',
        'how do i file a complaint': 'You can file a complaint through our website or by contacting customer service.',
        'do you offer discounts for corporate bookings': 'Yes, we offer discounts for corporate bookings. Please contact our sales team for more information.',
        'how can i track my booking': 'You can track your booking status through our website using your booking reference number.',
        'what is the maximum rental period': 'The maximum rental period is typically 30 days, but longer rentals can be arranged upon request.',
        'can i rent a car without a credit card': 'A credit card is required for the security deposit, but the rental payment can be made with a debit card or other accepted methods.',
        'do you offer 24/7 customer support': 'Yes, our customer support is available 24/7 to assist you.',
         'can i rent a car for a one-way trip': 'Yes, we offer one-way rentals. Additional fees may apply.',
    'do you offer weekend specials': 'Yes, we offer special rates for weekend rentals. Check our website for current promotions.',
    'how do i pay for tolls': 'Toll charges will be billed to the payment method on file. You can also pay tolls directly if the vehicle has a toll pass.',
    'what is the policy on smoking in the car': 'Smoking is not allowed in our rental cars. A cleaning fee will be charged for any evidence of smoking.',
    'can i rent a car with a debit card': 'Yes, you can rent a car with a debit card. However, a credit card is required for the security deposit.',
    'do you offer loyalty programs': 'Yes, we offer a loyalty program that rewards you with points for each rental. Points can be redeemed for discounts on future rentals.',
    'what is the policy on out-of-state travel': 'You are allowed to travel out-of-state, but please inform us at the time of rental.',
    'how do i add extra features to my rental': 'You can add extra features like GPS, child seats, and additional insurance during the booking process or by contacting customer service.',
    'can i rent a car if my license is from another country': 'Yes, you can rent a car with a valid driver’s license from another country. An international driver’s permit may also be required.',
    'do you offer chauffeur services': 'Yes, we offer chauffeur services for an additional fee. Please contact us for more details.',
    'what is the process for returning the car after hours': 'You can return the car after hours by dropping the keys in the designated drop box at our rental location.',
    'how do i get a refund': 'Refunds will be processed to the original payment method within 5-7 business days after the rental ends.',
    'can i rent a car for a road trip': 'Yes, our cars are perfect for road trips. Please inform us if you plan to travel long distances.',
    'do you offer cars with Wi-Fi': 'Yes, some of our cars come equipped with Wi-Fi. Please check the availability at the time of booking.',
    'can i get a rental extension online': 'Yes, you can request a rental extension through your account on our website.',
    'what is the policy on off-road driving': 'Off-road driving is not permitted with our rental cars. Any damage resulting from off-road driving will be the renter’s responsibility.',
    'how do i request a specific car model': 'While we cannot guarantee a specific model, you can request a preferred model, and we will do our best to accommodate your request.',
    'are there any hidden fees': 'We believe in transparent pricing. All fees will be clearly outlined in your rental agreement.',
    'how do i get to the rental location from the airport': 'We offer a shuttle service from the airport to our rental location. Please follow the signs to the shuttle pick-up area.',
    'can i rent a car for a few hours': 'Yes, we offer hourly rentals. Please check our website for availability and rates.',
    'do you offer roadside assistance': 'Yes, we offer 24/7 roadside assistance for all our rental cars.',
    'what is the process for replacing a lost key': 'If you lose the car key, contact our customer service immediately. A replacement fee will apply.',
    'can i rent a car with cash': 'Unfortunately, we do not accept cash for car rentals. A credit card is required for the security deposit.',
    'do you have vans or trucks for rent': 'Yes, we offer a variety of vans and trucks for rent. Please check our website for availability.',
    'what is the process for filing an insurance claim': 'If you need to file an insurance claim, contact our customer service for assistance. They will guide you through the process.',
    'can i rent a car with unlimited mileage': 'Yes, we offer unlimited mileage options for certain rentals. Please check the details at the time of booking.',
    'do you offer senior citizen discounts': 'Yes, we offer discounts for senior citizens. Please contact our customer service for more information.',
    'how do i report a damaged car': 'If you notice any damage to the car, report it to our customer service immediately.',
    'what is the minimum rental period': 'The minimum rental period is typically one day, but we also offer hourly rentals.',
    'do you offer hybrid cars': 'Yes, we have hybrid cars available for rent. Please check our website for availability.',
    'how do i get directions to the rental location': 'Directions to our rental locations are available on our website. You can also contact our customer service for assistance.',
    'can i rent a car if i have a learner’s permit': 'Unfortunately, we do not rent cars to individuals with a learner’s permit. A full driver’s license is required.',
    'do you offer group discounts': 'Yes, we offer discounts for group bookings. Please contact our sales team for more details.',
    'how do i make changes to my reservation': 'You can make changes to your reservation through your account on our website or by contacting customer service.',
    'can i rent a car with a temporary license': 'Yes, you can rent a car with a temporary license, provided it is valid and you have other required documents.',
    'do you have sports cars available': 'Yes, we have a selection of sports cars available for rent. Please check our website for availability.',
    'what is the policy on toll charges': 'Toll charges will be billed to the payment method on file or you can pay them directly if the vehicle has a toll pass.',
    'how do i get a refund for unused rental days': 'Refunds for unused rental days will be processed to the original payment method within 5-7 business days after the rental ends.',
    'can i rent a car with a foreign credit card': 'Yes, we accept foreign credit cards for car rentals. Please ensure your card is enabled for international transactions.',
    'do you offer military discounts': 'Yes, we offer discounts for military personnel. Please contact our customer service for more information.',
    'what is the policy on additional drivers': 'Additional drivers can be added for a small fee. They must meet all rental requirements and be present to sign the rental agreement.',
    'can i rent a car if i have points on my license': 'Yes, you can rent a car if you have points on your license, as long as your license is valid and not suspended.',
    'do you offer vehicles with disabled access': 'Yes, we have vehicles with disabled access available. Please check our website for availability.',
    'what is the policy on refueling': 'You can either prepay for fuel or return the car with the same fuel level as when you picked it up. Additional charges may apply for refueling.',
    'how do i get a quote for a rental': 'You can get a quote for a rental by using the booking form on our website or by contacting customer service.',
    'can i rent a car for someone else to drive': 'Yes, but the person driving the car must meet all rental requirements and be present to sign the rental agreement.',
    'do you offer one-day rentals': 'Yes, we offer one-day rentals. Please check our website for availability and rates.',
    'how do i pay for parking tickets': 'Any parking tickets received during the rental period are the responsibility of the renter. You can pay them directly to the issuing authority.',
    'what is the policy on using the car for business purposes': 'You can use our rental cars for business purposes. Please inform us at the time of rental.',
    'do you offer child booster seats': 'Yes, we offer child booster seats for rent. Please request one at the time of booking.',
    'can i rent a car if i am under 25': 'Yes, but a young driver fee may apply for renters under 25 years old.',
    'do you offer hotel delivery': 'Yes, we offer hotel delivery services at select locations. Please contact our customer service for more details.',
    'how do i change my reservation dates': 'You can change your reservation dates through your account on our website or by contacting customer service.',
    'can i rent a car with a digital driver’s license': 'We currently do not accept digital driver’s licenses. A physical driver’s license is required.',
    'do you offer cars with automatic transmission': 'Yes, we offer cars with automatic transmission. Please check our website for availability.',
    'what is the policy on late returns': 'Late returns may incur additional charges. Please contact us if you anticipate a delay.',
    'can i rent a car if i have a DUI on my record': 'You may be able to rent a car if you have a DUI on your record, depending on the severity and recency. Please contact customer service for more information.',
    'do you offer weekend rental deals': 'Yes, we offer special deals for weekend rentals. Check our website for current promotions.',
    'how do i get an invoice for my rental': 'You can request an invoice through your account on our website or by contacting customer service.',
    'can i rent a car if my license is expired': 'Unfortunately, we cannot rent a car to individuals with an expired driver’s license. A valid license is required.',
    'do you offer cars with snow chains': 'Yes, we offer cars with snow chains for winter driving. Please request them at the time of booking.',
    'how do i report a problem with my rental car': 'If you encounter any problems with your rental car, contact our customer service immediately for assistance.',
    'can i rent a car for a wedding': 'Yes, we offer cars for special events like weddings. Please contact us for more details.',
    'do you offer eco-friendly cars': 'Yes, we offer eco-friendly cars such as hybrids and electric vehicles. Please check our website for availability.',
    'how do i cancel my reservation': 'You can cancel your reservation through your account on our website or by contacting customer service.',
    'can i rent a car if i am under 21': 'The minimum age requirement to rent a car is 21 years old. However, some locations may have additional age restrictions.',
    'do you offer prepaid fuel options': 'Yes, we offer prepaid fuel options for your convenience. You can choose this option at the time of booking.',
    'how do i upgrade my rental car': 'You can request an upgrade through your account on our website or by contacting customer service. Availability may vary.',
    'can i rent a car for a day trip': 'Yes, our cars are perfect for day trips. Please check our website for availability and rates.',
    'do you offer student discounts': 'Yes, we offer discounts for students. Please contact our customer service for more information.',
    'what is the policy on using the car for ridesharing': 'Using our rental cars for ridesharing services is not allowed. Please contact customer service for more information.',

        'what are the operating hours': 'Our rental locations are open from 8 AM to 8 PM, Monday to Sunday.',
        'do you offer airport pickup': 'Yes, we offer airport pickup services at major airports.',
        'how do i update my personal information': 'You can update your personal information through your account on our website or by contacting customer service.',
        'can i get a receipt for my rental': 'Yes, a receipt will be provided at the end of your rental period or you can request one via email.',
        'do you have electric cars available': 'Yes, we have electric cars available for rent. Please check our website for availability.',
        'how do i check the status of my reservation': 'You can check the status of your reservation on our website using your booking reference number.',
        'what should i do in case of an accident': 'In case of an accident, contact the local authorities and our customer service immediately. We will guide you through the process.'
          };

    const defaultResponse = 'I\'m not sure how to respond to that. Can you try asking something else?';

    return responses[userInput.toLowerCase()] || defaultResponse;
}
