
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
            this.statusStrip.Location = new System.Drawing.Point(0, 470);
            this.statusStrip.Name = "statusStrip";
            this.statusStrip.Padding = new System.Windows.Forms.Padding(1, 0, 13, 0);
            this.statusStrip.Size = new System.Drawing.Size(604, 22);
            this.statusStrip.TabIndex = 0;
            // 
            // openFinStatusLabel
            // 
            this.openFinStatusLabel.ForeColor = System.Drawing.Color.White;
            this.openFinStatusLabel.Name = "openFinStatusLabel";
            this.openFinStatusLabel.Size = new System.Drawing.Size(127, 17);
            this.openFinStatusLabel.Text = "OpenFin Disconnected";
            // 
            // orderStatusLabel
            // 
            this.orderStatusLabel.Name = "orderStatusLabel";
            this.orderStatusLabel.Size = new System.Drawing.Size(0, 17);
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.AutoSize = true;
            this.tableLayoutPanel1.ColumnCount = 3;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 150F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 173F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 260F));
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
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Top;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 57);
            this.tableLayoutPanel1.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.Padding = new System.Windows.Forms.Padding(11, 9, 11, 9);
            this.tableLayoutPanel1.RowCount = 4;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 22F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 29F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 22F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 15F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 17F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(604, 106);
            this.tableLayoutPanel1.TabIndex = 4;
            // 
            // label4
            // 
            this.label4.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label4.ForeColor = System.Drawing.Color.White;
            this.label4.Location = new System.Drawing.Point(11, 13);
            this.label4.Margin = new System.Windows.Forms.Padding(0, 3, 4, 3);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(81, 15);
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
            this.contextTypeDropDown.Location = new System.Drawing.Point(15, 34);
            this.contextTypeDropDown.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.contextTypeDropDown.Name = "contextTypeDropDown";
            this.contextTypeDropDown.Size = new System.Drawing.Size(130, 21);
            this.contextTypeDropDown.TabIndex = 6;
            this.contextTypeDropDown.SelectedIndexChanged += this.ContextTypeDropDown_SelectedIndexChanged;
            // 
            // ContextInputLabel
            // 
            this.ContextInputLabel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.ContextInputLabel.AutoSize = true;
            this.ContextInputLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.ContextInputLabel.ForeColor = System.Drawing.Color.White;
            this.ContextInputLabel.Location = new System.Drawing.Point(11, 64);
            this.ContextInputLabel.Margin = new System.Windows.Forms.Padding(0, 3, 4, 3);
            this.ContextInputLabel.Name = "ContextInputLabel";
            this.ContextInputLabel.Size = new System.Drawing.Size(70, 15);
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
            this.ContextItemComboBox.Location = new System.Drawing.Point(15, 85);
            this.ContextItemComboBox.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.ContextItemComboBox.Name = "ContextItemComboBox";
            this.ContextItemComboBox.Size = new System.Drawing.Size(130, 21);
            this.ContextItemComboBox.TabIndex = 8;
            // 
            // label2
            // 
            this.label2.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(161, 13);
            this.label2.Margin = new System.Windows.Forms.Padding(0, 3, 4, 3);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(90, 15);
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
            this.contextGroupComboBox.Location = new System.Drawing.Point(165, 34);
            this.contextGroupComboBox.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.contextGroupComboBox.Name = "contextGroupComboBox";
            this.contextGroupComboBox.Size = new System.Drawing.Size(130, 21);
            this.contextGroupComboBox.TabIndex = 10;
            this.contextGroupComboBox.SelectedIndexChanged += this.ContextGroupComboBox_SelectedIndexChanged;
            // 
            // label3
            // 
            this.label3.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.label3.ForeColor = System.Drawing.Color.White;
            this.label3.Location = new System.Drawing.Point(161, 64);
            this.label3.Margin = new System.Windows.Forms.Padding(0, 3, 4, 3);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(91, 15);
            this.label3.TabIndex = 11;
            this.label3.Text = "Interop Broker";
            // 
            // interopBrokerInput
            // 
            this.interopBrokerInput.Location = new System.Drawing.Point(165, 85);
            this.interopBrokerInput.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.interopBrokerInput.MinimumSize = new System.Drawing.Size(4, 27);
            this.interopBrokerInput.Multiline = true;
            this.interopBrokerInput.Name = "interopBrokerInput";
            this.interopBrokerInput.Size = new System.Drawing.Size(165, 27);
            this.interopBrokerInput.TabIndex = 12;
            // 
            // receivedInstrument
            // 
            this.receivedInstrument.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left)));
            this.receivedInstrument.AutoSize = true;
            this.receivedInstrument.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.receivedInstrument.ForeColor = System.Drawing.Color.White;
            this.receivedInstrument.Location = new System.Drawing.Point(334, 13);
            this.receivedInstrument.Margin = new System.Windows.Forms.Padding(0, 3, 4, 3);
            this.receivedInstrument.Name = "receivedInstrument";
            this.receivedInstrument.Size = new System.Drawing.Size(59, 15);
            this.receivedInstrument.TabIndex = 13;
            this.receivedInstrument.Text = "Received";
            // 
            // receivedContext
            // 
            this.receivedContext.AutoSize = true;
            this.receivedContext.ForeColor = System.Drawing.Color.White;
            this.receivedContext.Location = new System.Drawing.Point(338, 31);
            this.receivedContext.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.receivedContext.Name = "receivedContext";
            this.receivedContext.Size = new System.Drawing.Size(43, 13);
            this.receivedContext.TabIndex = 14;
            this.receivedContext.Text = "Not Set";
            // 
            // receivedIntentValue
            // 
            this.receivedIntentValue.AutoSize = true;
            this.receivedIntentValue.ForeColor = System.Drawing.Color.White;
            this.receivedIntentValue.Location = new System.Drawing.Point(336, 82);
            this.receivedIntentValue.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.receivedIntentValue.Name = "receivedIntentValue";
            this.receivedIntentValue.Size = new System.Drawing.Size(43, 13);
            this.receivedIntentValue.TabIndex = 16;
            this.receivedIntentValue.Text = "Not Set";
            // 
            // receivedIntentLabel
            // 
            this.receivedIntentLabel.AutoSize = true;
            this.receivedIntentLabel.Font = new System.Drawing.Font("Segoe UI", 9F, System.Drawing.FontStyle.Bold);
            this.receivedIntentLabel.ForeColor = System.Drawing.Color.White;
            this.receivedIntentLabel.Location = new System.Drawing.Point(336, 60);
            this.receivedIntentLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.receivedIntentLabel.Name = "receivedIntentLabel";
            this.receivedIntentLabel.Size = new System.Drawing.Size(97, 15);
            this.receivedIntentLabel.TabIndex = 15;
            this.receivedIntentLabel.Text = "Received Intent";
            // 
            // logPanel
            // 
            this.logPanel.Controls.Add(this.logBox);
            this.logPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.logPanel.Location = new System.Drawing.Point(0, 198);
            this.logPanel.Margin = new System.Windows.Forms.Padding(1);
            this.logPanel.Name = "logPanel";
            this.logPanel.Padding = new System.Windows.Forms.Padding(11, 9, 11, 9);
            this.logPanel.Size = new System.Drawing.Size(604, 294);
            this.logPanel.TabIndex = 5;
            // 
            // logBox
            // 
            this.logBox.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.logBox.Location = new System.Drawing.Point(11, 21);
            this.logBox.Name = "logBox";
            this.logBox.Size = new System.Drawing.Size(582, 264);
            this.logBox.TabIndex = 0;
            this.logBox.Text = "";
            // 
            // separator
            // 
            this.separator.BorderStyle = System.Windows.Forms.BorderStyle.Fixed3D;
            this.separator.Dock = System.Windows.Forms.DockStyle.Top;
            this.separator.Location = new System.Drawing.Point(0, 56);
            this.separator.Margin = new System.Windows.Forms.Padding(0);
            this.separator.Name = "separator";
            this.separator.Size = new System.Drawing.Size(604, 1);
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
            this.label1.Location = new System.Drawing.Point(1, 7);
            this.label1.Margin = new System.Windows.Forms.Padding(0);
            this.label1.Name = "label1";
            this.label1.Padding = new System.Windows.Forms.Padding(11, 0, 11, 0);
            this.label1.Size = new System.Drawing.Size(269, 25);
            this.label1.TabIndex = 2;
            this.label1.Text = "WinForm Interop Example";
            // 
            // pictureBox1
            // 
            this.pictureBox1.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.pictureBox1.Image = ((System.Drawing.Image)(resources.GetObject("pictureBox1.Image")));
            this.pictureBox1.Location = new System.Drawing.Point(549, 7);
            this.pictureBox1.Margin = new System.Windows.Forms.Padding(1);
            this.pictureBox1.Name = "pictureBox1";
            this.pictureBox1.Size = new System.Drawing.Size(45, 45);
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
            this.panelUnderline.Margin = new System.Windows.Forms.Padding(1);
            this.panelUnderline.Name = "panelUnderline";
            this.panelUnderline.Size = new System.Drawing.Size(604, 56);
            this.panelUnderline.TabIndex = 1;
            // 
            // label5
            // 
            this.label5.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("Segoe UI", 8F);
            this.label5.ForeColor = System.Drawing.Color.White;
            this.label5.Location = new System.Drawing.Point(2, 27);
            this.label5.Margin = new System.Windows.Forms.Padding(0);
            this.label5.Name = "label5";
            this.label5.Padding = new System.Windows.Forms.Padding(11, 0, 11, 0);
            this.label5.Size = new System.Drawing.Size(327, 13);
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
            this.submitContextButton.Location = new System.Drawing.Point(221, 4);
            this.submitContextButton.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.submitContextButton.Name = "submitContextButton";
            this.submitContextButton.Size = new System.Drawing.Size(95, 22);
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
            this.connectToBrokerButton.Location = new System.Drawing.Point(13, 4);
            this.connectToBrokerButton.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.connectToBrokerButton.Name = "connectToBrokerButton";
            this.connectToBrokerButton.Size = new System.Drawing.Size(98, 22);
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
            this.panelButtons.Location = new System.Drawing.Point(0, 163);
            this.panelButtons.Margin = new System.Windows.Forms.Padding(1);
            this.panelButtons.Name = "panelButtons";
            this.panelButtons.Padding = new System.Windows.Forms.Padding(11, 9, 11, 9);
            this.panelButtons.Size = new System.Drawing.Size(604, 35);
            this.panelButtons.TabIndex = 15;
            // 
            // registerIntent
            // 
            this.registerIntent.Anchor = System.Windows.Forms.AnchorStyles.Left;
            this.registerIntent.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(79)))), ((int)(((byte)(77)))), ((int)(((byte)(255)))));
            this.registerIntent.Enabled = false;
            this.registerIntent.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.registerIntent.ForeColor = System.Drawing.Color.White;
            this.registerIntent.Location = new System.Drawing.Point(437, 4);
            this.registerIntent.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.registerIntent.Name = "registerIntent";
            this.registerIntent.Size = new System.Drawing.Size(98, 21);
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
            this.fireIntent.Location = new System.Drawing.Point(329, 4);
            this.fireIntent.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
            this.fireIntent.Name = "fireIntent";
            this.fireIntent.Size = new System.Drawing.Size(95, 22);
            this.fireIntent.TabIndex = 19;
            this.fireIntent.Text = "Fire Intent";
            this.fireIntent.UseVisualStyleBackColor = false;
            this.fireIntent.Click += new System.EventHandler(this.FireIntent_Click);
            // 
            // MainWindow
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(30)))), ((int)(((byte)(31)))), ((int)(((byte)(35)))));
            this.ClientSize = new System.Drawing.Size(604, 492);
            this.Controls.Add(this.statusStrip);
            this.Controls.Add(this.logPanel);
            this.Controls.Add(this.panelButtons);
            this.Controls.Add(this.tableLayoutPanel1);
            this.Controls.Add(this.separator);
            this.Controls.Add(this.panelUnderline);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(4, 3, 4, 3);
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
    }
}

