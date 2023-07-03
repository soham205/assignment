const amqp = require('amqplib');

// RabbitMQ connection URL
const rabbitmqURL = 'amqp://localhost:5672';

// Name of the exchange
const exchangeName = 'my-exchange';

// Name of the queue
const queueName = 'my-queue';

// Routing key
const routingKey = 'my-routing-key';

async function setup() {
  try {
    // Create a connection to RabbitMQ
    const connection = await amqp.connect({hostname:'localhost',port:'5672',username:'root',password:'123'});
    const channel = await connection.createChannel();

    // Create an exchange
    await channel.assertExchange(exchangeName, 'direct', { durable: true });

    // Create a queue
    await channel.assertQueue(queueName, { durable: true });

    // Bind the queue to the exchange with the routing key
    await channel.bindQueue(queueName, exchangeName, routingKey);

    // Subscribe to messages from the queue
    channel.consume(queueName, (message) => {
      if (message) {
        console.log('Received message:', message.content.toString());
        channel.ack(message);
      }
    });

    // Publish a message to the exchange
    const message = 'Hello, RabbitMQ!';
    channel.publish(exchangeName, routingKey, Buffer.from(message), { persistent: true });

    console.log('Message sent:', message);
    return
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the setup function to establish the RabbitMQ connection and perform the setup
setup()
// .then(()=>{

//     process.exit()
// })