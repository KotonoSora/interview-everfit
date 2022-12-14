# Interview Everfit

## Require

Build out a calendar to manage working training. Should be able to 1) rearrange workouts between days, 2) rearrange exercises between workouts. UI should be as close to the design as possible. 

Product Requirements
TRAINING CALENDAR SCREEN
1. Should show 1 week of day containers, Monday to Sunday
     a. The days of the week should show up above each container
     b. The days of the month for this current week should show up on each respective container
     c. The date for Today should be colored purple and bolded (example shown on Friday)  

2. Each day container can hold a number of workout containers
     a. User can arrange the order of workouts in a day by using drag-and-drop.
     b. User can also move workouts in between different days by using drag-and-drop 

3. Each workout container will have:
     a. A workout name (in purple), that ends in “...” if the name is too long (eg. “Chest Day - with Arm exercises”) 
     b. Any number of exercises, that will expand the workout container size
     c. Extra credit: Plus button to add new exercises to the container. Will add an exercise in the format: 
           • Exercise name = Exercise E (5th letter of the alphabet)
           • Set information = 50 lb x 5

4. Each exercise container will have:
     a. An exercise name (eg. “Bench Press Medium Grip”)
     b. Set information for that exercise (eg. “50 lb x 5, 60 lb x 5, 70 lb x 5”)
     c. Number (eg. 3x) that shows the number of sets for that exercise

## Notes

Có một số notes khi làm bài test như thế này nha e:
- Sử dụng Reactjs cho bài test(Có thể dùng bất kỳ cli nào để tạo project với reactjs)
- Trong bài test KHÔNG dùng thêm thư viện nào(Trừ thư viện cho drag/drop)
- Làm xong bài test có thể gửi qua github or zip lại rồi gửi.
- Thời gian làm bài là 4 tiếng (cái này là lowest priority e có thể dùng thêm thời gian nếu cần đáp ứng các yêu cầu của bài test)