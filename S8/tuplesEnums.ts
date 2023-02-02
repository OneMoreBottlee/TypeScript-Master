// Tuple

let RGB: [number, number, number] = [255, 5, 5];
RGB = [2, 5, 5];
RGB = [255, 0, "255"];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];
goodRes[0] = "Res";
goodRes.push(123);

const BadRes: HTTPResponse = ["Bad", 500];

// Enum

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED

function isDelivered(status: OrderStatus){
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.)