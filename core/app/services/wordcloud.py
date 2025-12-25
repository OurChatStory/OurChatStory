import base64
import re
import pickle
from wordcloud import WordCloud
import io
from matplotlib.colors import LinearSegmentedColormap

from app.utils.constants import WORDCLOUD_HEIGHT, WORDCLOUD_WIDTH

with open("./assets/stopwords/stop_words.pkl", "rb") as f:
    stopwords = pickle.load(f)

with open("./assets/stopwords/more_stopwords.wordlist", "r") as f:
    more_stopwords = set(f.read().splitlines())
    stopwords.update(more_stopwords)

def words_weight(df):
    chat_words = ""
    for val in df["message"]:
        val = str(val)
        tokens = val.split()
        for i in range(len(tokens)):
            tokens[i] = tokens[i].lower()
        chat_words += " ".join(tokens) + " "
    chat_words = re.sub(r"http\S+", "", chat_words)
    if chat_words.strip() == "":
        return "chat unavailable"
    return chat_words


def word_cloud(df):
    chat_words = words_weight(df)
    # Colormap uses the blob colors across screens for consistent theming.
    blob_cmap = LinearSegmentedColormap.from_list(
        "wordcloud_blobs",
        [
            "#25d366",  # Welcome / Welcome2 / GridStats / ThankCard
            "#3b82f6",  # TotalChat
            "#f59e0b",  # MostActive
            "#8b5cf6",  # MonthlyGraph
            "#ec4899",  # HourlyGraph
            "#06b6d4",  # NoTalk
            "#6366f1",  # WordCloud
            "#ef4444",  # CountPie
            "#f97316",  # EmojiChart
            "#ffffff",  # Keep white for contrast
        ],
    )
    # mask_arr = np.array(Image.open("assets/masks/walogo.jpg"))
    wordcloud = WordCloud(
        font_path="assets/fonts/Poppins-Medium.ttf",
        # mask=mask_arr,
        min_word_length=2,
        width=WORDCLOUD_WIDTH,
        height=WORDCLOUD_HEIGHT,
        stopwords=stopwords,
        min_font_size=12,
        background_color="#111b21",
        colormap=blob_cmap,
    )
    wc = None
    try:
        wc = wordcloud.generate(chat_words)
    except:
        wc = wordcloud.generate("chat unavailable")

    return wc


def word_cloud_to_base64(df):
    img = word_cloud(df)
    img_bytes = io.BytesIO()
    img.to_image().save(img_bytes, format="PNG")
    img_bytes = img_bytes.getvalue()
    img_base64 = base64.b64encode(img_bytes).decode("utf-8")
    return img_base64
