import "../styles/review-modal.css";

const ReviewModal = () => `
<div id="modals">
    <div class="modal fade" id="reviewModal" tabindex="-1" role="dialog" aria-labelledby="reviewModalLabel" aria-hidden="true"> 
    <form id="review-form">
    <div class="close-btn">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
    </div>

<label for="name">Name</label>
<input type="text" id="name" name="name" placeholder="Your name..">
<label for="review">Review</label>
<textarea id="review" name="review" placeholder="Write something.." style="height:200px"></textarea>
<input id="submit-button" type="submit" value="Submit">
    </form>
    </div>
</div>
`;
export default ReviewModal;
