
courses = Course.create([
    {
        name: "Ruby Course",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/200px-Ruby_logo.svg.png"
    },
    {
        name: "Ruby on Rails Course",
        image_url: ""
    },
    {
        name: "React Course",
        image_url: ""
    },
    {
        name: "BDD with RSpec and Rails",
        image_url: ""
    }
])

reviews = Review.create([
    {
        title: "Average course",
        description: "Average course, great instructor.",
        score: 4,
        course_id: Course.last
    },
    {
        title: "Bad course",
        description: "Meeeh.",
        score: 1,
        course_id: Course.last
    },
    {
        title: "OMG",
        description: "The instructor is very clear.",
        score: 4,
        course_id: Course.first
    },
    {
        title: "Great course",
        description: "Excellent quality of content.",
        score: 5,
        course_id: Course.first
    },
])