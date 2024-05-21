
namespace OpenFin.Interop.Win.Sample
{
    partial class MainWindow
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainWindow));
            this.statusStrip = new System.Windows.Forms.StatusStrip();
            this.openFinStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.orderStatusLabel = new System.Windows.Forms.ToolStripStatusLabel();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.FDCVersionDropDown = new System.Windows.Forms.ComboBox();
            this.label4 = new System.Windows.Forms.Label();
            this.contextTypeDropDown = new System.Windows.Forms.ComboBox();
            this.ContextInputLabel = new System.Windows.Forms.Label();
            this.ContextItemComboBox = new System.Windows.Forms.ComboBox();
            this.label2 = new System.Windows.Forms.Label();
            this.contextGroupComboBox = new System.Windows.Forms.ComboBox();
            this.label3 = new System.Windows.Forms.Label();
            this.interopBrokerInput = new System.Windows.Forms.TextBox();
            this.receivedInstrument = new System.Windows.Forms.Label();
            this.receivedContext = new System.Windows.Forms.Label();
            this.receivedIntentValue = new System.Windows.Forms.Label();
            this.receivedIntentLabel = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.logPanel = new System.Windows.Forms.Panel();
            this.logBox = new System.Windows.Forms.RichTextBox();
            this.separator = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.pictureBox1 = new System.Windows.Forms.PictureBox();
            this.panelUnderline = new System.Windows.Forms.Panel();
            this.label5 = new System.Windows.Forms.Label();
            this.submitContextButton = new System.Windows.Forms.Button();
            this.connectToBrokerButton = new System.Windows.Forms.Button();
            this.panelButtons = new System.Windows.Forms.Panel();
            this.registerIntent = new System.Windows.Forms.Button();
            this.fireIntent = new System.Windows.Forms.Button();
            this.statusStrip.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.logPanel.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).BeginInit();
            this.panelUnderline.SuspendLayout();
            this.panelButtons.SuspendLayout();
            this.SuspendLayout();
            // 
            // statusStrip
            // 
            this.statusStrip.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.statusStrip.ImageScalingSize = new System.Drawing.Size(24, 24);
            this.statusStrip.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.openFinStatusLabel,
            this.orderStatusLabel});
            this.statusStrip.Location = new System.Drawing.Point(0, 747);
            this.statusStrip.Name = "statusStrip";
            this.statusStrip.Padding = new System.Windows.Forms.Padding(2, 0, 20, 0);
            this.statusStrip.Size = new System.Drawing.Size(906, 32);
            this.statusStrip.TabIndex = 0;
            // 
            // openFinStatusLabel
            // 
            this.openFinStatusLabel.ForeColor = System.Drawing.Color.White;
            this.openFinStatusLabel.Name = "openFinStatusLabel";
            this.openFinStatusLabel.Size = new System.Drawing.Size(191, 25);
            this.openFinStatusLabel.Text = "OpenFin Disconnected";
            // 
            // orderStatusLabel
            // 
            this.orderStatusLabel.Name = "orderStatusLabel";
            this.orderStatusLabel.Size = new System.Drawing.Size(0, 25);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.AutoSize = true;
            this.tableLayoutPanel1.ColumnCount = 3;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 225F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 260F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 842F));
            this.tableLayoutPanel1.Controls.Add(this.FDCVersionDropDown, 0, 7);
            this.tableLayoutPanel1.Controls.Add(this.label4, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.contextTypeDropDown, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.ContextInputLabel, 0, 2);
            this.tableLayoutPanel1.Controls.Add(this.ContextItemComboBox, 0, 3);
            this.tableLayoutPanel1.Controls.Add(this.label2, 1, 0);
            this.tableLayoutPanel1.Controls.Add(this.contextGroupComboBox, 1, 1);
            this.tableLayoutPanel1.Controls.Add(this.label3, 1, 2);
            this.tableLayoutPanel1.Controls.Add(this.interopBrokerInput, 1, 3);
            this.tableLayoutPanel1.Controls.Add(this.receivedInstrument, 2, 0);
            this.tableLayoutPanel1.Controls.Add(this.receivedContext, 2, 1);
            this.tableLayoutPanel1.Controls.Add(this.receivedIntentValue, 2, 3);
            this.tableLayoutPanel1.Controls.Add(this.receivedIntentLabel, 2, 2);
            this.tableLayoutPanel1.Controls.Add(this.label6, 0, 6);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 88);
            this.tableLayoutPanel1.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.Padding = new System.Windows.Forms.Padding(16, 14, 16, 14);
            this.tableLayoutPanel1.RowCount = 10;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 34F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 45F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 34F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 23F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 32F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 8F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 10F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 26F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(906, 284);
            this.tableLayoutPanel1.TabIndex = 4;
            // 
            // FDCVersionDropDown
            // 
            this.FDCVersionDropDown.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.FDCVersionDropDown.FormattingEnabled = true;
            this.FDCVersionDropDown.Items.AddRange(new object[] {
            "None",
            "1.2",
            "2.0"});
            this.FDCVersionDropDown.Location = new System.Drawing.Point(22, 227);
            this.FDCVersionDropDown.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.FDCVersionDropDown.Name = "FDCVersionDropDown";
            this.FDCVersionDropDown.Size = new System.Drawing.Size(193, 28);
            this.FDCVersionDropDown.TabIndex = 18;
            // 
            // label4
            // 
            this.label4.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label4.ForeColor = System.Drawing.Color.White;
            this.label4.Location = new System.Drawing.Point(16, 19);
            this.label4.Margin = new System.Windows.Forms.Padding(0, 5, 6, 5);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(125, 24);
            this.label4.TabIndex = 5;
            this.label4.Text = "Context Type";
            // 
            // contextTypeDropDown
            // 
            this.contextTypeDropDown.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.contextTypeDropDown.FormattingEnabled = true;
            this.contextTypeDropDown.Items.AddRange(new object[] {
            "Instrument",
            "Contact",
            "Organization"});
            this.contextTypeDropDown.Location = new System.Drawing.Point(22, 53);
            this.contextTypeDropDown.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.contextTypeDropDown.Name = "contextTypeDropDown";
            this.contextTypeDropDown.Size = new System.Drawing.Size(193, 28);
            this.contextTypeDropDown.TabIndex = 6;
            // 
            // ContextInputLabel
            // 
            this.ContextInputLabel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.ContextInputLabel.AutoSize = true;
            this.ContextInputLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.ContextInputLabel.ForeColor = System.Drawing.Color.White;
            this.ContextInputLabel.Location = new System.Drawing.Point(16, 98);
            this.ContextInputLabel.Margin = new System.Windows.Forms.Padding(0, 5, 6, 5);
            this.ContextInputLabel.Name = "ContextInputLabel";
            this.ContextInputLabel.Size = new System.Drawing.Size(106, 24);
            this.ContextInputLabel.TabIndex = 7;
            this.ContextInputLabel.Text = "Instrument";
            this.ContextInputLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // ContextItemComboBox
            // 
            this.ContextItemComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.ContextItemComboBox.FormattingEnabled = true;
            this.ContextItemComboBox.Items.AddRange(new object[] {
            "AAPL",
            "CSCO",
            "IBM",
            "MSFT",
            "TSLA"});
            this.ContextItemComboBox.Location = new System.Drawing.Point(22, 132);
            this.ContextItemComboBox.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.ContextItemComboBox.Name = "ContextItemComboBox";
            this.ContextItemComboBox.Size = new System.Drawing.Size(193, 28);
            this.ContextItemComboBox.TabIndex = 8;
            // 
            // label2
            // 
            this.label2.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(241, 19);
            this.label2.Margin = new System.Windows.Forms.Padding(0, 5, 6, 5);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(137, 24);
            this.label2.TabIndex = 9;
            this.label2.Text = "Context Group";
            // 
            // contextGroupComboBox
            // 
            this.contextGroupComboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.contextGroupComboBox.Enabled = false;
            this.contextGroupComboBox.FormattingEnabled = true;
            this.contextGroupComboBox.Items.AddRange(new object[] {
            "N/A"});
            this.contextGroupComboBox.Location = new System.Drawing.Point(247, 53);
            this.contextGroupComboBox.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.contextGroupComboBox.Name = "contextGroupComboBox";
            this.contextGroupComboBox.Size = new System.Drawing.Size(193, 28);
            this.contextGroupComboBox.TabIndex = 10;
            // 
            // label3
            // 
            this.label3.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label3.ForeColor = System.Drawing.Color.White;
            this.label3.Location = new System.Drawing.Point(241, 98);
            this.label3.Margin = new System.Windows.Forms.Padding(0, 5, 6, 5);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(137, 24);
            this.label3.TabIndex = 11;
            this.label3.Text = "Interop Broker";
            // 
            // interopBrokerInput
            // 
            this.interopBrokerInput.Location = new System.Drawing.Point(247, 132);
            this.interopBrokerInput.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.interopBrokerInput.MinimumSize = new System.Drawing.Size(4, 39);
            this.interopBrokerInput.Multiline = true;
            this.interopBrokerInput.Name = "interopBrokerInput";
            this.interopBrokerInput.Size = new System.Drawing.Size(246, 39);
            this.interopBrokerInput.TabIndex = 12;
            // 
            // receivedInstrument
            // 
            this.receivedInstrument.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.receivedInstrument.AutoSize = true;
            this.receivedInstrument.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.receivedInstrument.ForeColor = System.Drawing.Color.White;
            this.receivedInstrument.Location = new System.Drawing.Point(501, 19);
            this.receivedInstrument.Margin = new System.Windows.Forms.Padding(0, 5, 6, 5);
            this.receivedInstrument.Name = "receivedInstrument";
            this.receivedInstrument.Size = new System.Drawing.Size(89, 24);
            this.receivedInstrument.TabIndex = 13;
            this.receivedInstrument.Text = "Received";
            // 
            // receivedContext
            // 
            this.receivedContext.AutoSize = true;
            this.receivedContext.ForeColor = System.Drawing.Color.White;
            this.receivedContext.Location = new System.Drawing.Point(507, 48);
            this.receivedContext.Margin = new System.Windows.Forms.Padding(6, 0, 6, 0);
            this.receivedContext.Name = "receivedContext";
            this.receivedContext.Size = new System.Drawing.Size(63, 20);
            this.receivedContext.TabIndex = 14;
            this.receivedContext.Text = "Not Set";
            // 
            // receivedIntentValue
            // 
            this.receivedIntentValue.AutoSize = true;
            this.receivedIntentValue.ForeColor = System.Drawing.Color.White;
            this.receivedIntentValue.Location = new System.Drawing.Point(504, 127);
            this.receivedIntentValue.Name = "receivedIntentValue";
            this.receivedIntentValue.Size = new System.Drawing.Size(63, 20);
            this.receivedIntentValue.TabIndex = 16;
            this.receivedIntentValue.Text = "Not Set";
            // 
            // receivedIntentLabel
            // 
            this.receivedIntentLabel.AutoSize = true;
            this.receivedIntentLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.receivedIntentLabel.ForeColor = System.Drawing.Color.White;
            this.receivedIntentLabel.Location = new System.Drawing.Point(504, 93);
            this.receivedIntentLabel.Name = "receivedIntentLabel";
            this.receivedIntentLabel.Size = new System.Drawing.Size(146, 25);
            this.receivedIntentLabel.TabIndex = 15;
            this.receivedIntentLabel.Text = "Received Intent";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("Microsoft Sans Serif", 8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label6.ForeColor = System.Drawing.Color.White;
            this.label6.Location = new System.Drawing.Point(19, 190);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(121, 20);
            this.label6.TabIndex = 17;
            this.label6.Text = "FDC3 Version";
            // 
            // logPanel
            // 
            this.logPanel.Controls.Add(this.logBox);
            this.logPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.logPanel.Location = new System.Drawing.Point(0, 426);
            this.logPanel.Margin = new System.Windows.Forms.Padding(2);
            this.logPanel.Name = "logPanel";
            this.logPanel.Padding = new System.Windows.Forms.Padding(16, 14, 16, 14);
            this.logPanel.Size = new System.Drawing.Size(906, 353);
            this.logPanel.TabIndex = 5;
            // 
            // logBox
            // 
            this.logBox.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.logBox.Location = new System.Drawing.Point(16, -65);
            this.logBox.Margin = new System.Windows.Forms.Padding(4, 5, 4, 5);
            this.logBox.Name = "logBox";
            this.logBox.Size = new System.Drawing.Size(874, 404);
            this.logBox.TabIndex = 0;
            this.logBox.Text = "";
            // 
            // separator
            // 
            this.separator.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.separator.Dock = System.Windows.Forms.DockStyle.Top;
            this.separator.Location = new System.Drawing.Point(0, 86);
            this.separator.Margin = new System.Windows.Forms.Padding(0);
            this.separator.Name = "separator";
            this.separator.Size = new System.Drawing.Size(906, 2);
            this.separator.TabIndex = 3;
            this.separator.Text = "label5";
            // 
            // label1
            // 
            this.label1.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Segoe UI", 14F, System.Drawing.FontStyle.Bold);
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(2, 11);
            this.label1.Margin = new System.Windows.Forms.Padding(0);
            this.label1.Name = "label1";
            this.label1.Padding = new System.Windows.Forms.Padding(16, 0, 16, 0);
            this.label1.Size = new System.Drawing.Size(395, 38);
            this.label1.TabIndex = 2;
            this.label1.Text = "WinForm Interop Example";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(824, 11);
            this.pictureBox1.Margin = new System.Windows.Forms.Padding(2);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(68, 69);
            this.pictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage;
            this.pictureBox1.TabIndex = 9;
            this.pictureBox1.TabStop = false;
            // 
            // panelUnderline
            // 
            this.panelUnderline.Controls.Add(this.pictureBox1);
            this.panelUnderline.Controls.Add(this.label5);
            this.panelUnderline.Controls.Add(this.label1);
            this.panelUnderline.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelUnderline.Location = new System.Drawing.Point(0, 0);
            this.panelUnderline.Margin = new System.Windows.Forms.Padding(2);
            this.panelUnderline.Name = "panelUnderline";
            this.panelUnderline.Size = new System.Drawing.Size(906, 86);
            this.panelUnderline.TabIndex = 1;
            // 
            // label5
            // 
            this.label5.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 8F);
            this.label5.ForeColor = System.Drawing.Color.White;
            this.label5.Location = new System.Drawing.Point(3, 42);
            this.label5.Margin = new System.Windows.Forms.Padding(0);
            this.label5.Name = "label5";
            this.label5.Padding = new System.Windows.Forms.Padding(16, 0, 16, 0);
            this.label5.Size = new System.Drawing.Size(438, 21);
            this.label5.TabIndex = 10;
            this.label5.Text = "Demonstrate interop with OpenFin in a native application";
            // 
            // submitContextButton
            // 
            this.submitContextButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.submitContextButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.submitContextButton.Enabled = false;
            this.submitContextButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.submitContextButton.ForeColor = System.Drawing.Color.White;
            this.submitContextButton.Location = new System.Drawing.Point(332, 6);
            this.submitContextButton.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.submitContextButton.Name = "submitContextButton";
            this.submitContextButton.Size = new System.Drawing.Size(142, 34);
            this.submitContextButton.TabIndex = 18;
            this.submitContextButton.Text = "Submit Context";
            this.submitContextButton.UseVisualStyleBackColor = false;
            this.submitContextButton.Click += new System.EventHandler(this.SubmitContextButton_Click);
            // 
            // connectToBrokerButton
            // 
            this.connectToBrokerButton.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.connectToBrokerButton.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.connectToBrokerButton.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.connectToBrokerButton.ForeColor = System.Drawing.Color.White;
            this.connectToBrokerButton.Location = new System.Drawing.Point(20, 6);
            this.connectToBrokerButton.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.connectToBrokerButton.Name = "connectToBrokerButton";
            this.connectToBrokerButton.Size = new System.Drawing.Size(147, 34);
            this.connectToBrokerButton.TabIndex = 16;
            this.connectToBrokerButton.Text = "Connect To Broker";
            this.connectToBrokerButton.UseVisualStyleBackColor = false;
            this.connectToBrokerButton.Click += new System.EventHandler(this.ConnectToBrokerButton_Click);
            // 
            // panelButtons
            // 
            this.panelButtons.Controls.Add(this.registerIntent);
            this.panelButtons.Controls.Add(this.fireIntent);
            this.panelButtons.Controls.Add(this.connectToBrokerButton);
            this.panelButtons.Controls.Add(this.submitContextButton);
            this.panelButtons.Dock = System.Windows.Forms.DockStyle.Top;
            this.panelButtons.Location = new System.Drawing.Point(0, 372);
            this.panelButtons.Margin = new System.Windows.Forms.Padding(2);
            this.panelButtons.Name = "panelButtons";
            this.panelButtons.Padding = new System.Windows.Forms.Padding(16, 14, 16, 14);
            this.panelButtons.Size = new System.Drawing.Size(906, 54);
            this.panelButtons.TabIndex = 15;
            // 
            // registerIntent
            // 
            this.registerIntent.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.registerIntent.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.registerIntent.Enabled = false;
            this.registerIntent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.registerIntent.ForeColor = System.Drawing.Color.White;
            this.registerIntent.Location = new System.Drawing.Point(656, 6);
            this.registerIntent.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.registerIntent.Name = "registerIntent";
            this.registerIntent.Size = new System.Drawing.Size(147, 32);
            this.registerIntent.TabIndex = 20;
            this.registerIntent.Text = "Register Intent";
            this.registerIntent.UseVisualStyleBackColor = false;
            this.registerIntent.Click += new System.EventHandler(this.RegisterIntent_Click);
            // 
            // fireIntent
            // 
            this.fireIntent.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.fireIntent.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.fireIntent.Enabled = false;
            this.fireIntent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.fireIntent.ForeColor = System.Drawing.Color.White;
            this.fireIntent.Location = new System.Drawing.Point(494, 6);
            this.fireIntent.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.fireIntent.Name = "fireIntent";
            this.fireIntent.Size = new System.Drawing.Size(142, 34);
            this.fireIntent.TabIndex = 19;
            this.fireIntent.Text = "Fire Intent";
            this.fireIntent.UseVisualStyleBackColor = false;
            this.fireIntent.Click += new System.EventHandler(this.FireIntent_Click);
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.ClientSize = new System.Drawing.Size(906, 779);
            this.Controls.Add(this.statusStrip);
            this.Controls.Add(this.logPanel);
            this.Controls.Add(this.panelButtons);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.separator);
            this.Controls.Add(this.panelUnderline);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(6, 5, 6, 5);
            this.Name = "MainWindow";
            this.Text = "Interop Example Tool";
            this.statusStrip.ResumeLayout(false);
            this.statusStrip.PerformLayout();
            this.tableLayoutPanel1.ResumeLayout(false);
            this.tableLayoutPanel1.PerformLayout();
            this.logPanel.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.pictureBox1)).EndInit();
            this.panelUnderline.ResumeLayout(false);
            this.panelUnderline.PerformLayout();
            this.panelButtons.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.StatusStrip statusStrip;
        private System.Windows.Forms.ToolStripStatusLabel openFinStatusLabel;
        private System.Windows.Forms.ToolStripStatusLabel orderStatusLabel;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Label ContextInputLabel;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label receivedInstrument;
        private System.Windows.Forms.Label receivedContext;
        private System.Windows.Forms.ComboBox contextGroupComboBox;
        private System.Windows.Forms.ComboBox ContextItemComboBox;
        private System.Windows.Forms.TextBox interopBrokerInput;
        private System.Windows.Forms.Panel logPanel;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox contextTypeDropDown;
        private System.Windows.Forms.Label separator;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.PictureBox pictureBox1;
        private System.Windows.Forms.Panel panelUnderline;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Button submitContextButton;
        private System.Windows.Forms.Button connectToBrokerButton;
        private System.Windows.Forms.Panel panelButtons;
        private System.Windows.Forms.Button fireIntent;
        private System.Windows.Forms.Button registerIntent;
        private System.Windows.Forms.Label receivedIntentLabel;
        private System.Windows.Forms.Label receivedIntentValue;
        private System.Windows.Forms.RichTextBox logBox;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.ComboBox FDCVersionDropDown;
    }
}

