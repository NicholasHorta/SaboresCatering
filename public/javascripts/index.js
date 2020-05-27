
const reviews = [
    { name: 'Erica:', post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem odit labore consectetur doloribus deserunt veniam eum accusantium totam, nesciunt voluptas! Voluptas, maxime blanditiis error laboriosam autem distinctio consequuntur molestias commodi.' },
    { name: 'David:', post: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi reprehenderit itaque, repellat ut exercitationem recusandae!' },
    { name: 'Louis:', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, inventore quos fuga veritatis optio dolores possimus. Accusantium, quo consectetur!' },
    { name: 'Grant:', post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Frank:', post: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus veritatis nulla ut quasi ad nisi temporibus eos rerum numquam, voluptates ex perferendis eius.' },
    { name: 'Allison:', post: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste veritatis suscipit praesentium!' }
]

let num = 0
function reviewFeed() {
    const name = document.querySelector('#review-person');
    const post = document.querySelector('#review-body');
    name.innerHTML = reviews[num].name;
    post.innerHTML = `"${reviews[num].post}"`;
    console.log(name)
    console.log(post)
    function animationClassAdd() {
        const name = document.querySelector('#review-person');
        const post = document.querySelector('#review-body');
        name.classList.add('review-animation')
        post.classList.add('review-animation')
        setInterval(() => {
            name.classList.remove('review-animation')
            post.classList.remove('review-animation')
        }, 4900);
    }
    animationClassAdd()
    if (num <= 4) {
        num++
    } else {
        return num = 0;
    }
}

document.onload = setInterval(reviewFeed, 5000)

